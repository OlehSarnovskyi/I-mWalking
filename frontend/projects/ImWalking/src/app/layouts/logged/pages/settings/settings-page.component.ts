import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {LoginState} from "../../../auth";
import {Observable} from "rxjs";
import {filter, switchMap} from "rxjs/operators";
import {SettingsState, UpdateMyDataAction} from "./store";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoggedLayout} from "../../models";
import {GetMyDataAction, LoggedLayoutState} from "../../store";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPageComponent implements OnInit {

  @Select(LoginState.token)
  token$: Observable<string>

  @Select(LoggedLayoutState.myData)
  myData$: Observable<LoggedLayout.User>

  constructor(private store$: Store,
              private jwtHelper: JwtHelperService) {}

  ngOnInit(): void {
    this.token$.pipe(
      filter(val => !!val),
      switchMap(val => this.store$.dispatch(new GetMyDataAction(this.jwtHelper.decodeToken(val).userId)))
    ).subscribe()
  }

  update(): void {
    const { _id } = this.store$.selectSnapshot(LoggedLayoutState.myData)
    this.store$.dispatch(new UpdateMyDataAction({...this.store$.selectSnapshot(SettingsState.formValue), _id}))
  }
}
