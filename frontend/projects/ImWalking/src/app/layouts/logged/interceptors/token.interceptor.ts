import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {LoginState} from "../../auth";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private store$: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.store$.selectSnapshot(LoginState.loggedIn)) {
      req = req.clone({
        setHeaders: {
          Authorization: this.store$.selectSnapshot(LoginState.token)
        }
      })
    }
    return next.handle(req)
  }
}
