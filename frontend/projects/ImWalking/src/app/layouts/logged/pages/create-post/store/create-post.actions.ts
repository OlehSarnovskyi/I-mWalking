import {CreatePost} from "../models";

export class CreatePostAction {
  static readonly desc = 'create post';
  static readonly type = '[CreatePostState] CreatePostAction';
  constructor(public readonly form: CreatePost.Form) {}
}
