import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarMessageInterceptorComponent} from "./snack-bar-message-interceptor.component";

@Injectable()
export class SnackBarMessageInterceptorInterceptor implements HttpInterceptor {

  constructor(private matSnackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(({error}: HttpErrorResponse) => {
        this.matSnackBar.openFromComponent(SnackBarMessageInterceptorComponent, {
          data: error.message,
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        })
        return EMPTY
      })
    )
  }
}
