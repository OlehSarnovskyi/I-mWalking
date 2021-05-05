import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {SetTokenAction} from "./pages/login/store";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent implements OnInit {

  constructor(private store$: Store,
              private router: Router,
              private jwtHelper: JwtHelperService) {}

  ngOnInit(): void {
    if (!this.jwtHelper.isTokenExpired()) {
      this.store$.dispatch(new SetTokenAction(this.jwtHelper.tokenGetter()))
      this.router.navigate(['view'])
    }
  }
}
