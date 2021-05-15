import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {LoginAction, LoginState} from "./store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

  @Select(LoginState.loggedIn) loggedIn$: Observable<boolean>

  constructor(private store$: Store, private router: Router) {}

  ngOnInit(): void {
    this.loggedIn$.subscribe(loggedIn => {
      if (loggedIn) {
        this.router.navigateByUrl('view')
      }
    })
  }

  login(): void {
    this.store$.dispatch(new LoginAction(this.store$.selectSnapshot(LoginState.formValue)))
  }
}
