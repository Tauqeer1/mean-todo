import jwt from 'jsonwebtoken';

import {
  serverErrorHandler,
  errorHandler403,
  errorHandler400
} from './responseHandler';
import { User } from '../modules/user';
import credentials from '../configs/credentials';

export default (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token && token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, credentials.secret, async (err, payload) => {
      if (err) {
        return serverErrorHandler(res, err);
      } else {
        const user$ = await User.findOne({ _id: payload.id });
        if (!user$) {
          return errorHandler403(res, 'Auth Invalid');
        } else {
          const user = user$.toObject();
          req.user = user;
          next();
        }
      }
    });
  } else {
    return errorHandler400(res, 'Auth token not attached');
  }
};
