import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Actions, ofActionSuccessful, Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {LogoutAction, SetTokenAction} from '../auth';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Subscription, timer} from "rxjs";

@Component({
  selector: 'app-logged-layout',
  templateUrl: './logged-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedLayoutComponent implements OnInit, OnDestroy {

  subscription = new Subscription()

  constructor(private store$: Store,
              private router: Router,
              private jwtHelper: JwtHelperService,
              private actions$: Actions) {}

  ngOnInit(): void {
    timer(0, 60_000).subscribe(() => {
      if (this.jwtHelper.isTokenExpired()) {
        this.store$.dispatch(new LogoutAction())
      } else {
        this.store$.dispatch(new SetTokenAction(this.jwtHelper.tokenGetter()))
      }
    })

    const sub1 = this.actions$.pipe(
      ofActionSuccessful(LogoutAction)
    ).subscribe(() => {
      this.router.navigateByUrl('')
    })

    this.subscription.add(sub1)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  logout() {
    this.store$.dispatch(new LogoutAction())
  }
}
