import { Router } from 'express';

import { signup, login } from './controller';
import { signupAndLoginFieldsValidation } from '../../utils';

// userRoutes definition
export const userRoutes = new Router();

// Signup route
userRoutes.post('/signup', signupAndLoginFieldsValidation(), signup);

// Login route
userRoutes.post('/login', signupAndLoginFieldsValidation(), login);
