import {Login} from "../models";

export class LoginAction {
  static readonly desc = 'login in system'
  static readonly type = '[LoginState] Login'
  constructor(public readonly form: Login.Form) {}
}

export class LogoutAction {
  static readonly desc = 'logout from system'
  static readonly type = '[LoginState] Logout'
}

export class SetTokenAction {
  static readonly desc = 'set token to LocalStorage'
  static readonly type = '[LoginState] SetToken'
  constructor(public readonly token: string) {}
}
