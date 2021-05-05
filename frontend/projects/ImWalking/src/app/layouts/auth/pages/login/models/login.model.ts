export namespace Login {
  export interface Form {
    email: string
    password: string
  }

  export interface SuccessResponse {
    token: string
    message: string
  }

  export interface State {
    form: {
      model: Form
      dirty: boolean
      status: string
      errors: {}
    }
    token: string
    loggedIn: boolean
  }
}
