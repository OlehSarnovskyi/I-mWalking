export namespace CreatePost {
  export interface Form {
    description: string
  }

  export interface State {
    form: {
      model: Form
      dirty: boolean
      status: string
      errors: {}
    }
  }
}
