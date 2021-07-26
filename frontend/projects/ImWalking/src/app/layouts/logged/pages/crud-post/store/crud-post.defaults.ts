import {CrudPost} from "../models";

export const CRUD_POST_DEFAULTS: CrudPost.State = {
  form: {
    model: undefined,
    dirty: false,
    status: '',
    errors: {}
  }
}
