import { Router } from 'express';

import {
  createTodo,
  getAllTodosByUserId,
  updateTodo,
  deleteTodo
} from './controller';
import { todoFieldsValidation, requireJwtAuth } from '../../utils';

export const todoRoutes = new Router();

// Create todo (this api require auth token)
todoRoutes.post('/todo', requireJwtAuth, todoFieldsValidation(), createTodo);

// Get all todos by user id (this api require auth token)
todoRoutes.get(
  '/todo',
  requireJwtAuth,
  todoFieldsValidation(),
  getAllTodosByUserId
);
// Update todo (this api require auth token)
todoRoutes.put(
  '/todo/:_id',
  requireJwtAuth,
  todoFieldsValidation(),
  updateTodo
);

// Delete todo (this api require auth token)
todoRoutes.delete('/todo/:_id', requireJwtAuth, deleteTodo);
