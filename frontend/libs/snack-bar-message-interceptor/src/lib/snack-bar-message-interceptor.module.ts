import {NgModule} from '@angular/core';
import {SnackBarMessageInterceptorComponent} from "./snack-bar-message-interceptor.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SnackBarMessageInterceptorInterceptor} from "./snack-bar-message-interceptor.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [SnackBarMessageInterceptorComponent],
  imports: [MatSnackBarModule],
  exports: [SnackBarMessageInterceptorComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: SnackBarMessageInterceptorInterceptor}
  ]
})
export class SnackBarMessageInterceptorModule { }
