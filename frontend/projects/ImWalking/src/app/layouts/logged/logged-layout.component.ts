import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {SetTokenAction} from '../auth';
import {JwtHelperService} from "@auth0/angular-jwt";
import {interval} from "rxjs";

@Component({
  selector: 'app-logged-layout',
  templateUrl: './logged-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedLayoutComponent implements OnInit {

  constructor(private store$: Store,
              private router: Router,
              private jwtHelper: JwtHelperService) {}

  ngOnInit(): void {
    interval(60_000).subscribe(() => {
      if (this.jwtHelper.isTokenExpired()) {
        // TODO implement stateManagement (how to select loggenin notLoggedIN)
        this.router.navigateByUrl('')
      } else {
        this.store$.dispatch(new SetTokenAction(this.jwtHelper.tokenGetter()))
      }
    })
  }
}
