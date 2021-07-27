import {CrudPost} from "../models";

export class SearchMyPostsAction {
  static readonly desc = 'search my posts';
  static readonly type = '[CrudPostState] SearchMyPostsAction';
  constructor(public readonly id: string) {}
}

export class CreatePostAction {
  static readonly desc = 'create post';
  static readonly type = '[CrudPostState] CreatePostAction';
  constructor(public readonly form: CrudPost.Form) {}
}

export class DeleteMyPostAction {
  static readonly desc = 'delete my post';
  static readonly type = '[CrudPostState] DeleteMyPostAction';
  constructor(public readonly id: string) {}
}
