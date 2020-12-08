import { NgModule } from '@angular/core';

import { LoggedLayoutRoutingModule } from './logged-layout-routing.module';
import {LoggedLayoutComponent} from "./logged-layout.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [LoggedLayoutComponent],
  imports: [
    LoggedLayoutRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class LoggedLayoutModule { }
