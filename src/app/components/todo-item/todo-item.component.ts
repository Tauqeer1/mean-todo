import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { TodoItem } from './../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  faTrash = faTrash;

  @Input() todo: Partial<TodoItem>;
  @Output() deletedTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() updatedTodo: EventEmitter<Partial<TodoItem>> = new EventEmitter<
    Partial<TodoItem>
  >();

  constructor() {}

  ngOnInit() {}

  // tslint:disable-next-line: variable-name
  completed(todo: Partial<TodoItem>, e) {
    todo.done = e.target.checked;
    this.updatedTodo.emit(todo);
  }
}
