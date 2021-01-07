import {Register} from "../models";

export const REGISTER_DEFAULTS: Register.State = {
  form: {
    model: undefined,
    dirty: false,
    status: '',
    errors: {}
  },
  registered: false
};
