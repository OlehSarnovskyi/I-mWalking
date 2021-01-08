import {Action, Selector, State, StateContext} from "@ngxs/store";
import {LOGIN_DEFAULTS} from "./login.defaults";
import {Injectable} from "@angular/core";
import {LoginAction, SetTokenAction} from "./login.actions";
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
  static loggedIn({logged}: Login.State): boolean {
    return logged;
  }

  @Selector()
  static token({token}: Login.State): string {
    return token;
  }


  @Action(LoginAction)
  login({patchState}: StateContext<Login.State>, { form }: LoginAction): Observable<Login.SuccessResponse> {
    return this.loginService.login(form)
      .pipe(
        tap(response => {
          patchState({
            token: response.token,
            logged: true
          })
        })
      )
  }

  @Action(SetTokenAction)
  setToken({patchState}: StateContext<Login.State>, { token }: SetTokenAction): void {
    patchState({token})
  }
}
