import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {CreatePostAction, DeleteMyPostAction, SearchMyPostsAction} from "./crud-post.actions";
import {Observable} from "rxjs";
import {CrudPost} from "../models";
import {CRUD_POST_DEFAULTS} from "./crud-post.defaults";
import {CrudPostService} from "../services";
import {Posts} from "../../posts";
import {tap} from "rxjs/operators";


@State<CrudPost.State>({
  name: 'CrudPostState',
  defaults: CRUD_POST_DEFAULTS,
})
@Injectable()
export class CrudPostState {

  constructor(private crudPostService: CrudPostService) {}

  @Selector()
  static formValue({form}: CrudPost.State): CrudPost.Form {
    return form.model;
  }

  @Selector()
  static myPosts({posts}: CrudPost.State): Posts.PostsList {
    return posts;
  }


  @Action(SearchMyPostsAction)
  search({patchState}: StateContext<CrudPost.State>, {id}: SearchMyPostsAction): Observable<Posts.PostsList> {
    return this.crudPostService.getMyPosts(id)
      .pipe(
        tap(posts => {
          patchState({posts})
        })
      )
  }

  @Action(CreatePostAction)
  create({patchState, getState}: StateContext<CrudPost.State>, {form}: CreatePostAction): Observable<Posts.Post> {
    const state = getState()
    return this.crudPostService.create(form)
      .pipe(
        tap((post) => {
          patchState({
            posts: {
              list: [...(state.posts ? state.posts.list : []), post]
            }
          })
        })
      )
  }

  @Action(DeleteMyPostAction)
  delete({patchState}: StateContext<CrudPost.State>, {id}: DeleteMyPostAction): Observable<{ message }> {
    return this.crudPostService.deleteMyPost(id)
      .pipe(
        tap(() => {
          patchState({posts: null})
        })
      )
  }
}
