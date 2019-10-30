import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

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
}
