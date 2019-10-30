import { check } from 'express-validator';

export const signupAndLoginFieldsValidation = () => {
  return [
    check('email')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Email required')
      .isEmail()
      .withMessage('Invalid email'),
    check('password')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Password required')
      .isLength({ min: 8 })
      .withMessage('Password must atleast 8 character long')
  ];
};
