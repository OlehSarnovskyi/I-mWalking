import {Posts} from "../models";

export const POSTS_DEFAULTS: Posts.State = {
  form: {
    model: undefined,
    dirty: false,
    status: '',
    errors: {}
  },
  posts: null
}
