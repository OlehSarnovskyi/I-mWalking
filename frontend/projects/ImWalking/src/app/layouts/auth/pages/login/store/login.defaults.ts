import {Login} from "../models";

export const LOGIN_DEFAULTS: Login.State = {
  form: {
    model: undefined,
    dirty: false,
    status: '',
    errors: {}
  },
  token: null,
  loggedIn: null
};
