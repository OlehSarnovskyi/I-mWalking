export class GetMyDataAction {
  static readonly desc = 'get my data';
  static readonly type = '[LoggedLayoutState] GetMyDataAction';
  constructor(public readonly id: string) {}
}
