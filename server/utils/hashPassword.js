import crypto from 'crypto';

// Method for converting plain password to hashed password
export default (password, salt) =>
  crypto
    .createHmac('sha512', salt)
    .update(password)
    .digest('hex');
