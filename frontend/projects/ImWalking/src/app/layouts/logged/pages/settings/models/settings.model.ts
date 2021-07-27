import {LoggedLayout} from "../../../models";

export namespace Settings {
  export interface Form {
    name: string
    email: string
    imageSrc: string
    telephone: string
    contactLinks: string[]
  }

  export interface State {
    form: {
      model: Form
      dirty: boolean
      status: string
      errors: {}
    }
    // TODO THINK
    myData: LoggedLayout.User
  }
}
