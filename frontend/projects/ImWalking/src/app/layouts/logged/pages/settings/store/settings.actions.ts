import {LoggedLayout} from "../../../models";

export class UpdateMyDataAction {
  static readonly desc = 'update my data';
  static readonly type = '[SettingsState] UpdateMyDataAction';
  constructor(public readonly body: LoggedLayout.User) {}
}
