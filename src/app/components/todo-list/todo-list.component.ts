import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<Partial<TodoItem>>;

  @Output() deletedTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() updatedTodo: EventEmitter<Partial<TodoItem>> = new EventEmitter<
    Partial<TodoItem>
  >();

  constructor() {}

  ngOnInit() {}
}
