import jwt from 'jsonwebtoken';

import credentials from '../configs/credentials';

export default args => jwt.sign(args, credentials.secret);
