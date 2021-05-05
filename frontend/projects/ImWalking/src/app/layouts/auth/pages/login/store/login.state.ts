import {Action, Selector, State, StateContext} from "@ngxs/store";
import {LOGIN_DEFAULTS} from "./login.defaults";
import {Injectable} from "@angular/core";
import {LoginAction, LogoutAction, SetTokenAction} from "./login.actions";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {LoginService} from "../services";
import {Login} from "../models";


@State<Login.State>({
  name: 'LoginState',
  defaults: LOGIN_DEFAULTS,
})
@Injectable()
export class LoginState {

  constructor(private loginService: LoginService) {}

  @Selector()
  static formValue({form}: Login.State): Login.Form {
    return form.model;
  }

  @Selector()
  static token({token}: Login.State): string {
    return token
  }

  @Selector()
  static loggedIn({loggedIn}: Login.State): boolean {
    return loggedIn
  }

  @Selector()
  static notLoggedIn({loggedIn}: Login.State): boolean {
    return !loggedIn
  }

  @Action(LoginAction)
  login({patchState}: StateContext<Login.State>, {form}: LoginAction): Observable<Login.SuccessResponse> {
    return this.loginService.login(form)
      .pipe(
        tap(response => {
          patchState({
            loggedIn: true,
            token: response.token
          })
        })
      )
  }

  @Action(LogoutAction)
  logout({patchState}: StateContext<Login.State>) {
    localStorage.removeItem('IWToken')
    patchState({
      loggedIn: false,
      token: null
    })
  }

  @Action(SetTokenAction)
  setToken({patchState}: StateContext<Login.State>, {token}: SetTokenAction): void {
    patchState({
      loggedIn: true,
      token
    })
  }
}
