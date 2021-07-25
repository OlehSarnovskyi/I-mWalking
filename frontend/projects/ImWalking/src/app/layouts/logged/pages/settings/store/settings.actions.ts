import {Settings} from "../models";

export class SearchMyPostsAction {
  static readonly desc = 'search my posts';
  static readonly type = '[SettingsState] SearchMyPostsAction';
  constructor(public readonly id: string) {}
}

export class DeleteMyPostAction {
  static readonly desc = 'delete my post';
  static readonly type = '[SettingsState] DeleteMyPostAction';
  constructor(public readonly id: string) {}
}

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
