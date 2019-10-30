import { Schema, model } from 'mongoose';
import crypto from 'crypto';

import hashPassword from '../../utils/hashPassword';

// User Schema for creating user collecion
let userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email required'],
      lowercase: true,
      index: { unique: true }
    },
    password: { type: String, required: [true, 'Password'] },
    salt: { type: String }
  },
  { timestamps: true }
);

// Hooks method to hash password before saving to db
userSchema.pre('save', function(next) {
  const length = 32;
  // generate a salt
  this.salt = crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
  this.password = hashPassword(this.password, this.salt);
  next();
});

// Export user model to access from other parts of the project
export const User = model('user', userSchema);
