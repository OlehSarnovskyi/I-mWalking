import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  CanLoad, Route, UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import {Select, Store} from "@ngxs/store";
import { LoginState } from '../layouts';

@Injectable()
export class LoggedInGuard implements CanActivate, CanActivateChild, CanLoad {
  @Select(LoginState.loggedIn) loggedIn$: Observable<boolean>

  constructor(private store$: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.store$.selectSnapshot(LoginState.notLoggedIn)) {
      return true
    }
    return this.loggedIn$
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
    if (this.store$.selectSnapshot(LoginState.notLoggedIn)) {
      return true
    }
    return this.loggedIn$
  }
}
