import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarErrorsInterceptorComponent} from "./snack-bar-errors-interceptor.component";

@Injectable()
export class SnackBarErrorsInterceptor implements HttpInterceptor {

  constructor(private matSnackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(({error}: HttpErrorResponse) => {
      this.matSnackBar.openFromComponent(SnackBarErrorsInterceptorComponent, {
        data: error.message,
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      })
      return EMPTY
    }))
  }
}
