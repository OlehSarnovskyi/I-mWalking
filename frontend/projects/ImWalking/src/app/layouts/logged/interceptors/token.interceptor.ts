import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {LoginState} from "../../auth/pages/login/store";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private store$: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newRequest;
    if (this.store$.selectSnapshot(LoginState.loggedIn)) {
      newRequest = req.clone({
        setHeaders: {
          Authorization: this.store$.selectSnapshot(LoginState.token)
        }
      })
    }
    return next.handle(newRequest)
  }
}
