import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './../../helper/auth-guard/auth-guard.guard';

import { TodoInputModule } from '../../components/todo-input/todo-input.module';
import { TodoListModule } from './../../components/todo-list/todo-list.module';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TodoInputModule,
    TodoListModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}
