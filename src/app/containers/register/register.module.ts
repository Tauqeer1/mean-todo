import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthFormModule } from '../../components/auth-form/auth-form.module';

import { RegisterComponent } from './register.component';

// Register route
const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AuthFormModule],
  exports: [RegisterComponent]
})
export class RegisterModule {}
