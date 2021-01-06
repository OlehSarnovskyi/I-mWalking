import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {LoginState} from "./store";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

  constructor(private store$: Store, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    // TODO why called twice
    console.log('login');
    console.log('for BE ->', this.store$.selectSnapshot(LoginState.getFormValue));
  }
}
