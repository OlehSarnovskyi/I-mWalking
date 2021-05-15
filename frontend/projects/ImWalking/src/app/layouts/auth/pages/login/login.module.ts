import {NgModule} from '@angular/core';
import {LoginPageComponent} from "./login-page.component";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginFormComponent} from "./components";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
    imports: [
        NgxsFormPluginModule,
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class LoginModule {}
