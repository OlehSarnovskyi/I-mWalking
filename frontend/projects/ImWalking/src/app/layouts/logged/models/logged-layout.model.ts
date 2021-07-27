import {Posts} from "../pages";

export namespace LoggedLayout {

  export interface State {
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
