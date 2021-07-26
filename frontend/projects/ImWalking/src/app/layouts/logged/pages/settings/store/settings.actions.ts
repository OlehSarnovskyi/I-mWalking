import {Settings} from "../models";

export class GetMyDataAction {
  static readonly desc = 'get my data';
  static readonly type = '[SettingsState] GetMyDataAction';
  constructor(public readonly id: string) {}
}

export class UpdateMyDataAction {
  static readonly desc = 'update my data';
  static readonly type = '[SettingsState] UpdateMyDataAction';
  constructor(public readonly body: Settings.User) {}
}
