import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/auth/auth-layout.module').then(m => m.AuthLayoutModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./layouts/logged/logged-layout.module').then(m => m.LoggedLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
