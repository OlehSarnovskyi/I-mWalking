import {NgModule} from '@angular/core';

import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsPageComponent} from "./settings-page.component";
import {SettingsMyDataComponent, SettingsMyPostsComponent, SettingsNavBarComponent} from "./components";


@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsNavBarComponent,
    SettingsMyDataComponent,
    SettingsMyPostsComponent
  ],
  imports: [
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
