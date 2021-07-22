export class SearchMyPostsAction {
  static readonly desc = 'search my posts';
  static readonly type = '[SettingsState] SearchMyPostsAction';
  constructor(public readonly id: string) {}
}
