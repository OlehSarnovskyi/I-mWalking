import {NgModule} from '@angular/core';

import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsPageComponent} from "./settings-page.component";
import {SettingsMyDataFormComponent, SettingsMyPostsComponent} from "./components";
import {LoggedLayoutModule} from "../../logged-layout.module";
import {CommonModule} from "@angular/common";
import {NgxsModule} from "@ngxs/store";
import {SettingsState} from "./store";
import {SettingsService} from "./services";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {DefaultImageDirective} from "./directives";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";


@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsMyDataFormComponent,
    SettingsMyPostsComponent,
    DefaultImageDirective
  ],
  imports: [
    NgxsModule.forFeature([SettingsState]),
    SettingsRoutingModule,
    LoggedLayoutModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxsFormPluginModule,
  ],
  providers: [SettingsService]
})
export class SettingsModule {}
