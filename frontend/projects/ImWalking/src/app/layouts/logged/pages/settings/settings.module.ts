import { NgModule } from '@angular/core';

import { SettingsRoutingModule } from './settings-routing.module';
import {SettingsPageComponent} from "./settings-page.component";


@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
