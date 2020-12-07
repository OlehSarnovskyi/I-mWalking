import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthLayoutComponent} from './auth-layout.component';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
      {path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLayoutRoutingModule { }
