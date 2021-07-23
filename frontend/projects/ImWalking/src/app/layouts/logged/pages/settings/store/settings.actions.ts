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
