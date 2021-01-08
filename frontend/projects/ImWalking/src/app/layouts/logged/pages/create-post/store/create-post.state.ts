import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {CreatePostAction} from "./create-post.actions";
import {Observable} from "rxjs";
import {CreatePost} from "../models";
import {CREATE_POST_DEFAULTS} from "./create-post.defaults";
import {CreatePostService} from "../services";


@State<CreatePost.State>({
  name: 'CreatePostState',
  defaults: CREATE_POST_DEFAULTS,
})
@Injectable()
export class CreatePostState {

  constructor(private createPostService: CreatePostService) {}

  @Selector()
  static formValue({form}: CreatePost.State): CreatePost.Form {
    return form.model;
  }


  @Action(CreatePostAction)
  create({patchState}: StateContext<CreatePost.State>, {form}: CreatePostAction): Observable<{ message: string }> {
    return this.createPostService.create(form)
  }
}
