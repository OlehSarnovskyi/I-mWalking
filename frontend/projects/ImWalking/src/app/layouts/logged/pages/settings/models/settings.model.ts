import {Posts} from "../../posts";

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
    posts: Posts.PostsList
    myData: User
  }

  export interface User {
    name: string
    email: string
    imageSrc: string
    telephone: string
    contactLinks: string[]
    _id: string
    posts?: Posts.Post[]
    password?: string
    __v?: number
  }
}
