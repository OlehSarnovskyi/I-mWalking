import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {RegisterAction, RegisterState} from "./store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-page',
  templateUrl: './register-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent implements OnInit {

  @Select(RegisterState.registered) registered$: Observable<boolean>

  constructor(private store$: Store, private router: Router) {}

  ngOnInit(): void {
    this.registered$.subscribe(registered => {
      if (registered) {
        this.router.navigateByUrl('')
      }
    })
  }

  register(): void {
    this.store$.dispatch(new RegisterAction(this.store$.selectSnapshot(RegisterState.formValue)))
  }
}
