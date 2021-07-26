import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {GetMyDataAction, UpdateMyDataAction} from "./settings.actions";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Settings} from "../models";
import {SETTINGS_DEFAULTS} from "./settings.defaults";
import {SettingsService} from "../services";


@State<Settings.State>({
  name: 'SettingsState',
  defaults: SETTINGS_DEFAULTS,
})
@Injectable()
export class SettingsState {

  constructor(private settingsService: SettingsService) {}


  @Selector()
  static formValue({form}: Settings.State): Settings.Form {
    return form.model;
  }

  @Selector()
  static myData({myData}: Settings.State): Settings.User {
    return myData;
  }


  @Action(GetMyDataAction)
  getMyDataAction({patchState}: StateContext<Settings.State>, {id}: GetMyDataAction): Observable<Settings.User> {
    return this.settingsService.getMyData(id)
      .pipe(
        tap(myData => {
          patchState({myData})
        })
      )
  }

  @Action(UpdateMyDataAction)
  updateMyDataAction({patchState}: StateContext<Settings.State>, {body}: UpdateMyDataAction): Observable<Settings.User> {
    return this.settingsService.updateMyData(body)
      .pipe(
        tap(myData => {
          patchState({myData})
        })
      )
  }
}
