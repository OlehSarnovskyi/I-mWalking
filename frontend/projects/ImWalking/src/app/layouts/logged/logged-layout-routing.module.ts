import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedLayoutComponent} from "./logged-layout.component";

const routes: Routes = [
  {
    path: '', component: LoggedLayoutComponent, children: [
      {path: '', redirectTo: 'posts', pathMatch: 'full'},
      {path: 'posts', loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)},
      {path: 'create-post', loadChildren: () => import('./pages/create-post/create-post.module').then(m => m.CreatePostModule)},
      {path: 'map', loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule)},
      {path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedLayoutRoutingModule { }
