import { User } from './model';
import { validationResult } from 'express-validator';

import {
  errorHandler400,
  successHandler,
  errorHandler403,
  errorHandler401,
  serverErrorHandler,
  createToken,
  hashPassword
} from '../../utils';

// Signup method for creating user
export const signup = async (req, res) => {
  try {
    const errorObj = validationResult(req);
    if (errorObj.errors.length > 0) {
      return errorHandler400(res, { msg: errorObj.errors[0].msg });
    }
    const { email, password } = req.body;
    let userEmail$ = await User.findOne({ email });
    if (userEmail$) {
      return errorHandler403(res, { msg: 'Email already taken' });
    }
    let user$ = await User.create({
      email,
      password
    });
    if (!user$) {
      errorHandler403(res, { msg: 'Unable to create user' });
    } else {
      let userObj = user$.toObject();
      const token = createToken({
        id: userObj._id
      });
      delete userObj.password;
      delete userObj.__v;
      delete userObj.salt;
      userObj.token = token;
      successHandler(res, userObj);
    }
  } catch (err) {
    serverErrorHandler(res, err);
  }
};

// Login method
export const login = async (req, res) => {
  try {
    const errorObj = validationResult(req);
    if (errorObj.errors.length > 0) {
      return errorHandler400(res, { msg: errorObj.errors[0].msg });
    }
    const { email, password } = req.body;
    const user$ = await User.findOne({ email: email.toLowerCase() });
    if (!user$) {
      return errorHandler401(res, {
        msg: "Invalid email, user doesn't exists."
      });
    }
    let user = user$.toObject();
    if (user.password !== hashPassword(password, user.salt)) {
      return errorHandler401(res, { msg: 'Invalid password.' });
    }

    const token = createToken({ id: user._id });
    delete user.password;
    delete user.salt;
    delete user.__v;
    user.token = token;
    successHandler(res, user);
  } catch (err) {
    serverErrorHandler(res, err);
  }
};
