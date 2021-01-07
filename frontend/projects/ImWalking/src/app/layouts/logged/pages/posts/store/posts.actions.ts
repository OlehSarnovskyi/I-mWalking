import {Posts} from "../models";

export class SearchPostsAction {
  static readonly desc = 'search posts';
  static readonly type = '[PostsState] SearchPostsAction';
  constructor(public readonly form: Posts.Form) {}
}
