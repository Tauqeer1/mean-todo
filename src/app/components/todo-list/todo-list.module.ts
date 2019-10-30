import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemModule } from '../todo-item/todo-item.module';

import { TodoListComponent } from './todo-list.component';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, TodoItemModule],
  exports: [TodoListComponent]
})
export class TodoListModule {}
