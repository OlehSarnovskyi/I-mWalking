import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {SetTokenAction} from '../auth';

@Component({
  selector: 'app-logged-layout',
  templateUrl: './logged-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedLayoutComponent implements OnInit {

  constructor(private store$: Store, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('IWToken')
    if (token) {
      this.store$.dispatch(new SetTokenAction(token))
    } else {
      this.router.navigateByUrl('')
    }
  }

}
