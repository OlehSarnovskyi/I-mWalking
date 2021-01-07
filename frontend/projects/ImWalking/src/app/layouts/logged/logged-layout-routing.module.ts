import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedLayoutComponent} from "./logged-layout.component";

const routes: Routes = [
  {
    path: '', component: LoggedLayoutComponent, children: [
      {path:'', redirectTo: 'posts', pathMatch: 'full'},
      {path: 'posts', loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)},
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
