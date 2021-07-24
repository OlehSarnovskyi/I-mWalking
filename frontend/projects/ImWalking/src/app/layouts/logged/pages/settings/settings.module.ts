import {NgModule} from '@angular/core';

import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsPageComponent} from "./settings-page.component";
import {SettingsMyDataComponent, SettingsMyPostsComponent, SettingsNavBarComponent} from "./components";
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


@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsNavBarComponent,
    SettingsMyDataComponent,
    SettingsMyPostsComponent
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
  ],
  providers: [SettingsService]
})
export class SettingsModule {}
