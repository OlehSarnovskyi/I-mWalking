import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedLayoutComponent} from "./logged-layout.component";

const routes: Routes = [
  {
    path: '', component: LoggedLayoutComponent, children: [
      {path:'', redirectTo: 'search', pathMatch: 'full'},
      {path: 'search', loadChildren: () => import('./pages/city-and-posts/search.module').then(m => m.SearchModule)},
      {path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule)},
      {path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedLayoutRoutingModule { }
