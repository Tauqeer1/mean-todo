import { Schema, model } from 'mongoose';

let todoSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, 'Text required']
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'User id required']
    },
    done: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Todo = model('todo', todoSchema);
