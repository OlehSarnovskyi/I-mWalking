import { NgModule } from '@angular/core';

import { LoggedLayoutRoutingModule } from './logged-layout-routing.module';
import {LoggedLayoutComponent} from "./logged-layout.component";


@NgModule({
  declarations: [LoggedLayoutComponent],
  imports: [LoggedLayoutRoutingModule]
})
export class LoggedLayoutModule { }
