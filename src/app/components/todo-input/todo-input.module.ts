import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { TodoInputComponent } from './todo-input.component';

@NgModule({
  declarations: [TodoInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodoInputComponent]
})
export class TodoInputModule {}
