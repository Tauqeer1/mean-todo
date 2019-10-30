import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthFormModule } from '../../components/auth-form/auth-form.module';

import { LoginComponent } from './login.component';

// Login route
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AuthFormModule],
  exports: [LoginComponent]
})
export class LoginModule {}
