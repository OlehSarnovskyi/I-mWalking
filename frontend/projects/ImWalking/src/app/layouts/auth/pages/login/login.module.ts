import { NgModule } from '@angular/core';
import {LoginPageComponent} from "./login-page.component";
import {LoginRoutingModule} from "./login-routing.module";


@NgModule({
  declarations: [LoginPageComponent],
  imports: [LoginRoutingModule]
})
export class LoginModule { }
