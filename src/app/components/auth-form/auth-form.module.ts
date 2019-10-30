import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule],
  exports: [AuthFormComponent]
})
export class AuthFormModule {}
