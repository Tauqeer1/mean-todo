import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// Lazy loading routes of the pages
const routes: Routes = [
  {
    path: 'login',
    loadChildren: './containers/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './containers/register/register.module#RegisterModule'
  },
  {
    path: 'dashboard',
    loadChildren: './containers/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

const routeOptions: ExtraOptions = {
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
