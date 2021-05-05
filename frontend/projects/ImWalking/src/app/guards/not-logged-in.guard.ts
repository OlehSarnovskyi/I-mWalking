import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginState} from "../layouts/auth/pages/login/store";
import {Select, Store} from "@ngxs/store";

@Injectable()
export class NotLoggedInGuard implements CanActivate, CanActivateChild, CanLoad {
  @Select(LoginState.notLoggedIn) notLoggedIn$: Observable<boolean>

  constructor(private store$: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.store$.selectSnapshot(LoginState.loggedIn)
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state)
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.store$.selectSnapshot(LoginState.loggedIn)) {
      return true
    }
    return this.notLoggedIn$
  }
}
