import {NgModule} from '@angular/core';
import {LoginPageComponent} from "./login-page.component";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginFormComponent} from "./components/login-form";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {NgxsModule} from "@ngxs/store";
import {LoginState} from "./store";
import {LoginService} from "./services";


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    NgxsModule.forFeature([LoginState]),
    NgxsFormPluginModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {}
