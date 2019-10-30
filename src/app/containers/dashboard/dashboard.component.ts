import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth/auth.service';
import { TodoService } from '../../services/todo/todo.service';

import { TodoItem } from '../../models/todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  todos: Array<Partial<TodoItem>>;
  constructor(
    private toastrService: ToastrService,
    private authService: AuthService,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getAllTodos().subscribe(
      todos => {
        this.todos = todos;
      },
      errorObj => {
        if (
          errorObj &&
          errorObj.error &&
          errorObj.error.error &&
          errorObj.error.error.msg
        ) {
          this.toastrService.error(errorObj.error.error.msg, 'Error!');
        } else {
          this.toastrService.error('Something went wrong!');
        }
      }
    );
  }

  addTodo(todoObj: TodoItem) {
    this.todoService.addTodo(todoObj).subscribe(
      todo => {
        this.toastrService.success('Todo added successfully', 'Added');
        this.todos.push(todo);
      },
      errorObj => {
        if (
          errorObj &&
          errorObj.error &&
          errorObj.error.error &&
          errorObj.error.error.msg
        ) {
          this.toastrService.error(errorObj.error.error.msg, 'Error!');
        } else {
          this.toastrService.error('Something went wrong!');
        }
      }
    );
  }

  // tslint:disable-next-line: variable-name
  deleteTodo(_id: string) {
    this.todoService.deleteTodo(_id).subscribe(
      id => {
        this.toastrService.success('Todo deleted successfully', 'Deleted');
        this.todos = this.todos.filter(todo => todo._id !== id);
      },
      errorObj => {
        if (
          errorObj &&
          errorObj.error &&
          errorObj.error.error &&
          errorObj.error.error.msg
        ) {
          this.toastrService.error(errorObj.error.error.msg, 'Error!');
        } else {
          this.toastrService.error('Something went wrong!');
        }
      }
    );
  }

  updateTodo(todo: TodoItem) {
    this.todoService.updateTodo(todo).subscribe(
      todoObj => {
        if (todoObj.done) {
          this.toastrService.success('Todo mark as completed', 'Completed');
        } else {
          this.toastrService.success(
            'Todo unmark as completed',
            'In Completed'
          );
        }
        const todoObject = this.todos.find(obj => obj._id === todoObj._id);
        if (todoObject) {
          todoObject.done = todoObj.done;
        }
      },
      errorObj => {
        if (
          errorObj &&
          errorObj.error &&
          errorObj.error.error &&
          errorObj.error.error.msg
        ) {
          this.toastrService.error(errorObj.error.error.msg, 'Error!');
        } else {
          this.toastrService.error('Something went wrong!');
        }
      }
    );
  }

  logout() {
    this.authService.logout();
  }
}
