export namespace CrudPost {
  export interface Form {
    readonly _id: string
    city: string
    animal: string
    description: string
    imageSrc: string
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
