import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {JwtHelperService} from "@auth0/angular-jwt";
import {SetTokenAction} from "../auth";

@Component({
  templateUrl: './app-layout.component.html',
  styles: [`
    mat-card {
      display: flex;
      padding: 0;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 50vw;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent implements OnInit {

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
