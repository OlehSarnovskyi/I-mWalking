import { NgModule } from '@angular/core';
import {SnackBarErrorsInterceptorComponent} from "./snack-bar-errors-interceptor.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SnackBarErrorsInterceptor} from "./snack-bar-errors-interceptor.interceptor";


@NgModule({
  declarations: [SnackBarErrorsInterceptorComponent],
  exports: [SnackBarErrorsInterceptorComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: SnackBarErrorsInterceptor}
  ]
})
export class SnackBarErrorsInterceptorModule { }
