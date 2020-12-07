import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedLayoutComponent} from "./logged-layout.component";

const routes: Routes = [
  {
    path: '', component: LoggedLayoutComponent, children: [
      {path: 'cities', loadChildren: () => import('./pages/choose-city/choose-city.module').then(m => m.ChooseCityModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedLayoutRoutingModule { }
