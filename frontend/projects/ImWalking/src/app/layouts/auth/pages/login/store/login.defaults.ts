import {ILoginState} from "./login.state.model";

export const LOGIN_DEFAULTS: ILoginState = {
  form: {
    model: undefined,
    dirty: false,
    status: '',
    errors: {}
  }
};
