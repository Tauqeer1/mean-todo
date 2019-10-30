import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoItemComponent } from './todo-item.component';

@NgModule({
  declarations: [TodoItemComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [TodoItemComponent]
})
export class TodoItemModule {}
