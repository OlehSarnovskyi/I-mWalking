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
import {Select} from "@ngxs/store";
import {LoginState} from '../layouts';
import {LoggedInGuard} from "./logged-in.guard";

@Injectable()
export class NotLoggedInGuard implements CanActivate, CanActivateChild, CanLoad {
  @Select(LoginState.loggedIn) loggedIn$: Observable<boolean>

  constructor(private loggedInGuard: LoggedInGuard) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loggedInGuard.canActivate(route, state);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loggedInGuard.canActivate(childRoute, state);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loggedInGuard.canLoad(route, segments);
  }
}
