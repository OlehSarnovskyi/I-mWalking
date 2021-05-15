import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {JwtHelperService} from "@auth0/angular-jwt";
import {SetTokenAction} from "../auth";

@Component({
  templateUrl: './app-layout.component.html',
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    mat-card {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 80vh;
      width: 500px;
      min-width: 300px;
      max-width: 500px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent implements OnInit {

  constructor(private store$: Store,
              private router: Router,
              private jwtHelper: JwtHelperService) {}

  ngOnInit(): void {
    // TODO, think how to rewrite repeating
    if (!this.jwtHelper.isTokenExpired()) {
      this.store$.dispatch(new SetTokenAction(this.jwtHelper.tokenGetter()))
      this.router.navigate(['view'])
    }
  }
}
