import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../../models/todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  todoObj: Partial<TodoItem>;
  @Output() todoItem: EventEmitter<Partial<TodoItem>> = new EventEmitter<
    Partial<TodoItem>
  >();
  constructor() {}

  ngOnInit() {
    this.todoObj = {
      text: '',
      done: false
    };
  }

  addTodo() {
    this.todoItem.emit({ text: this.todoObj.text, done: this.todoObj.done });
    this.todoObj.text = '';
  }
}
