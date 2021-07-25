import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {LoginState} from "../../../auth";
import {Observable} from "rxjs";
import {filter, switchMap} from "rxjs/operators";
import {GetMyDataAction, SettingsState, UpdateMyDataAction} from "./store";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Settings} from "./models";

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

  @Select(SettingsState.myData)
  myData$: Observable<Settings.User>

  constructor(private store$: Store,
              private jwtHelper: JwtHelperService) {}

  ngOnInit(): void {
    this.token$.pipe(
      filter(val => !!val),
      switchMap(val => this.store$.dispatch(new GetMyDataAction(this.jwtHelper.decodeToken(val).userId)))
    ).subscribe()
  }

  update(): void {
    const _id = this.store$.selectSnapshot(SettingsState.myData)._id
    this.store$.dispatch(new UpdateMyDataAction({...this.store$.selectSnapshot(SettingsState.formValue), _id}))
  }
}
