import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {SetTokenAction} from "./pages/login/store";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent implements OnInit {

  constructor(private store$: Store, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('IWToken')
    if (token) {
      this.store$.dispatch(new SetTokenAction(token))
      this.router.navigate(['view'])
    }
  }
}
