import {Selector, State} from "@ngxs/store";
import {LOGIN_DEFAULTS} from "./login.defaults";
import {Injectable} from "@angular/core";
import {ILoginState} from "./login.state.model";


@State<ILoginState>({
  name: 'LoginState',
  defaults: LOGIN_DEFAULTS,
})
@Injectable()
export class LoginState {
  @Selector()
  static getFormValue({ form }): ILoginState {
    return form.model;
  }
}
