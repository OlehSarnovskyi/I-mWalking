import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {GetMyDataAction} from "./logged-layout.actions";
import {Observable} from "rxjs";
import {LOGGED_LAYOUT_DEFAULTS} from "./logged-layout.defaults";
import {LoggedLayout} from "../models";
import {tap} from "rxjs/operators";
import {LoggedLayoutService} from "../services";


@State<LoggedLayout.State>({
  name: 'LoggedLayoutState',
  defaults: LOGGED_LAYOUT_DEFAULTS,
})
@Injectable()
export class LoggedLayoutState {

  constructor(private loggedLayoutService: LoggedLayoutService) {}

  @Selector()
  static myData({myData}: LoggedLayout.State): LoggedLayout.User {
    return myData
  }

  @Selector()
  static filledTelephoneAndContactLinks({myData: {telephone, contactLinks}}: LoggedLayout.State): boolean {
    return !!(telephone && contactLinks.length)
  }


  @Action(GetMyDataAction)
  getMyDataAction({patchState}: StateContext<LoggedLayout.State>, {id}: GetMyDataAction): Observable<LoggedLayout.User> {
    return this.loggedLayoutService.getMyData(id)
      .pipe(
        tap(myData => {
          patchState({myData})
        })
      )
  }
}
