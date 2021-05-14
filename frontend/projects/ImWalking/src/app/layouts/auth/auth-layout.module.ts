import {NgModule} from '@angular/core';

import {AuthLayoutRoutingModule} from './auth-layout-routing.module';
import {AuthLayoutComponent} from "./auth-layout.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    AuthLayoutRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AuthLayoutModule { }
