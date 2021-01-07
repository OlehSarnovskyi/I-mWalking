import {Login} from "../models";

export class LoginAction {
  static readonly desc = 'login in system';
  static readonly type = '[LoginState] Login';
  constructor(public readonly form: Login.Form) {}
}
