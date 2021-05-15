import {NgModule} from '@angular/core';

import {AuthLayoutRoutingModule} from './auth-layout-routing.module';
import {AuthLayoutComponent} from "./auth-layout.component";

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [AuthLayoutRoutingModule]
})
export class AuthLayoutModule { }
