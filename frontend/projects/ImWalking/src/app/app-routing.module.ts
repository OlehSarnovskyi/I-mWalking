import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedInGuard, NotLoggedInGuard} from "./guards";


const routes: Routes = [
  {path: 'app', redirectTo: '', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./layouts/app/app-layout.module').then(m => m.AppLayoutModule),
    canActivate: [NotLoggedInGuard],
    canActivateChild: [NotLoggedInGuard],
    canLoad: [NotLoggedInGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth/auth-layout.module').then(m => m.AuthLayoutModule),
  },
  {
    path: 'view',
    loadChildren: () => import('./layouts/logged/logged-layout.module').then(m => m.LoggedLayoutModule),
    canActivate: [LoggedInGuard],
    canActivateChild: [LoggedInGuard],
    canLoad: [LoggedInGuard]
  },
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
