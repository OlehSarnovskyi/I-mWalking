import {CreatePost} from "../models";

export const CREATE_POST_DEFAULTS: CreatePost.State = {
  form: {
    model: undefined,
    dirty: false,
    status: '',
    errors: {}
  }
}
