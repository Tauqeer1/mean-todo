import { Todo } from './model';
import { validationResult } from 'express-validator';

import {
  serverErrorHandler,
  successHandler,
  errorHandler400
} from '../../utils';

// Creating todo
export const createTodo = async (req, res) => {
  try {
    const errorObj = validationResult(req);
    if (errorObj.errors.length > 0) {
      return errorHandler400(res, { msg: errorObj.errors[0].msg });
    }
    const { text, done } = req.body;

    let todo$ = await Todo.create({
      text,
      done,
      userId: req.user._id
    });
    if (!todo$) {
    } else {
      let todoObj = todo$.toObject();
      delete todoObj.__v;
      successHandler(res, todoObj);
    }
  } catch (err) {
    serverErrorHandler(res, err);
  }
};

// Get all todos by user id
export const getAllTodosByUserId = async (req, res) => {
  try {
    let todos$ = await Todo.find({ userId: req.user._id });
    if (!todos$) {
    } else {
      successHandler(res, todos$);
    }
  } catch (err) {
    serverErrorHandler(res, err);
  }
};

// Update todo
export const updateTodo = async (req, res) => {
  try {
    const { _id } = req.params;
    const errorObj = validationResult(req);
    if (errorObj.errors.length > 0) {
      return errorHandler400(res, { msg: errorObj.errors[0].msg });
    }
    const { text, done } = req.body;

    let todo$ = await Todo.findOneAndUpdate(
      { _id },
      {
        text,
        done,
        userId: req.user._id
      },
      { new: true }
    );
    if (!todo$) {
    } else {
      let todoObj = todo$.toObject();
      delete todoObj.__v;
      successHandler(res, todoObj);
    }
  } catch (err) {
    serverErrorHandler(res, err);
  }
};

// Delete todo
export const deleteTodo = async (req, res) => {
  try {
    const { _id } = req.params;
    let todo$ = await Todo.findOneAndDelete({ _id });
    if (!todo$) {
    } else {
      let todoObj = todo$.toObject();
      successHandler(res, { msg: 'Todo deleted successfully!' });
    }
  } catch (err) {
    serverErrorHandler(res, err);
  }
};
