export namespace Register {
  export interface Form {
    email: string
    password: string
    name: string
  }

  export interface SuccessResponse {
    message: string
  }

  export interface State {
    form: {
      model: Form
      dirty: boolean
      status: string
      errors: {}
    }
    registered: boolean
  }
}
