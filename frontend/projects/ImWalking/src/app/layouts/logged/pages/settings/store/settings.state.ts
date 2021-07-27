import {Action, Selector, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {UpdateMyDataAction} from "./settings.actions";
import {Observable} from "rxjs";
import {Settings} from "../models";
import {SETTINGS_DEFAULTS} from "./settings.defaults";
import {SettingsService} from "../services";
import {LoggedLayout} from "../../../models";
import {tap} from "rxjs/operators";
import {GetMyDataAction} from "../../../store";


@State<Settings.State>({
  name: 'SettingsState',
  defaults: SETTINGS_DEFAULTS,
})
@Injectable()
export class SettingsState {

  constructor(private store$: Store,
              private settingsService: SettingsService) {}


  @Selector()
  static formValue({form}: Settings.State): Settings.Form {
    return form.model;
  }


  @Action(UpdateMyDataAction)
  updateMyDataAction({patchState}: StateContext<Settings.State>, {body}: UpdateMyDataAction): Observable<LoggedLayout.User> {
    return this.settingsService.updateMyData(body)
      .pipe(
        tap(({_id}) => {
          this.store$.dispatch(new GetMyDataAction(_id))
        })
      )
  }
}
