import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsPageComponent} from "./settings-page.component";
import {SettingsMyDataComponent, SettingsMyPostsComponent} from "./components";

const routes: Routes = [
  {path: '', component: SettingsPageComponent, children: [
      {path: 'my-data', component: SettingsMyDataComponent},
      {path: 'my-posts', component: SettingsMyPostsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
