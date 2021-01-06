export interface ILoginState {
  form: {
    model: {
      email: string
      password: string
    }
    dirty: boolean
    status: string
    errors: {}
  }
}
