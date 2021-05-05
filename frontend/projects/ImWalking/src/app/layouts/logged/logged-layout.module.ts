import { NgModule } from '@angular/core';

import { LoggedLayoutRoutingModule } from './logged-layout-routing.module';
import {LoggedLayoutComponent} from "./logged-layout.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {TokenInterceptor} from "./interceptors";


@NgModule({
  declarations: [LoggedLayoutComponent],
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('IWToken')
        }
      }
    }),
    LoggedLayoutRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor}
  ]
})
export class LoggedLayoutModule { }
