import { check } from 'express-validator';

// Signup and login fields validation
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

// todo fields validation
export const todoFieldsValidation = () => {
  return [
    check('text')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Text required')
  ];
};
