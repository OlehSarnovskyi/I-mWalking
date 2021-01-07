import {Register} from "../models";

export class RegisterAction {
  static readonly desc = 'register in system';
  static readonly type = '[RegisterState] Register';
  constructor(public readonly form: Register.Form) {}
}
