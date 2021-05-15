import {NgModule} from '@angular/core';

import {AppLayoutComponent} from "./app-layout.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {AppLayoutRoutingModule} from "./app-layout-routing.module";


@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    AppLayoutRoutingModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AppLayoutModule { }
