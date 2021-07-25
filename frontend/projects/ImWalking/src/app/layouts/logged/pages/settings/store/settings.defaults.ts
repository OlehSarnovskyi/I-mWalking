import {Settings} from "../models";

export const SETTINGS_DEFAULTS: Settings.State = {
  form: {
    model: undefined,
    dirty: false,
    status: '',
    errors: {}
  },
  posts: null,
  myData: null,
}
