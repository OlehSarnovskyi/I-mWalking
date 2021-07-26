import {CrudPost} from "../models";

export class CreatePostAction {
  static readonly desc = 'create post';
  static readonly type = '[CrudPostState] CreatePostAction';
  constructor(public readonly form: CrudPost.Form) {}
}
