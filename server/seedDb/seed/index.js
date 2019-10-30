import mongoose from 'mongoose';
import dbConnect from '../../configs/db';

// db connection
dbConnect();

import { User } from '../../modules/user';
import { Todo } from '../../modules/todos';

User.collection.drop();
Todo.collection.drop();

User.create({ email: 'test@user.com', password: '123123123' })
  .then(user => {
    if (user) {
      Todo.create([
        {
          text: 'Todo 1',
          done: false,
          userId: user._id
        },
        {
          text: 'Todo 2',
          done: false,
          userId: user._id
        },
        {
          text: 'Todo 3',
          done: true,
          userId: user._id
        }
      ])
        .then(todo => {
          console.log('Todos created successfully!');
        })
        .catch(error => {
          console.error('todos creating error', error);
        })
        .finally(() => {
          console.log('mongoose connection close');
          mongoose.connection.close();
        });
    }
  })
  .catch(error => {
    console.error('user creating error', error);
  });
