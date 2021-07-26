import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedLayoutComponent} from "./logged-layout.component";
import {UnsavedFormGuard} from "./guards";

const routes: Routes = [
  {
    path: '', component: LoggedLayoutComponent, children: [
      {path: '', redirectTo: 'posts', pathMatch: 'full'},
      {path: 'posts', loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)},
      {path: 'create-post', loadChildren: () => import('./pages/create-post/create-post.module').then(m => m.CreatePostModule)},
      {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule),
        canDeactivate: [UnsavedFormGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedLayoutRoutingModule { }
