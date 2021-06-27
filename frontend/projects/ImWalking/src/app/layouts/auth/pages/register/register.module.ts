import {NgModule} from '@angular/core';
import {RegisterPageComponent} from "./register-page.component";
import {RegisterRoutingModule} from "./register-routing.module";
import {RegisterFormComponent} from "./components";
import {RegisterService} from "./services";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgxsModule} from "@ngxs/store";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {RegisterState} from "./store";
import {MatCardModule} from "@angular/material/card";
import {PasteEventTrimmerModule} from "paste-event-trimmer";


@NgModule({
  declarations: [
    RegisterPageComponent,
    RegisterFormComponent
  ],
  imports: [
    NgxsModule.forFeature([RegisterState]),
    NgxsFormPluginModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    PasteEventTrimmerModule
  ],
  providers: [RegisterService]
})
export class RegisterModule {}
