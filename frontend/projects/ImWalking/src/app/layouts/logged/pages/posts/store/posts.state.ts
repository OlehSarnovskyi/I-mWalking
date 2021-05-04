import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {SearchPostsAction} from "./posts.actions";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Posts} from "../models";
import {POSTS_DEFAULTS} from "./posts.defaults";
import {PostsService} from "../services";


@State<Posts.State>({
  name: 'PostsState',
  defaults: POSTS_DEFAULTS,
})
@Injectable()
export class PostsState {

  constructor(private postsService: PostsService) {}

  @Selector()
  static formValue({form}: Posts.State): Posts.Form {
    return form.model;
  }

  @Selector()
  static list({posts}: Posts.State): Posts.PostsList {
    return posts;
  }


  @Action(SearchPostsAction)
  search({patchState}: StateContext<Posts.State>, { form }: SearchPostsAction): Observable<Posts.PostsList> {
    return this.postsService.search(form)
      .pipe(
        tap(posts => {
          patchState({posts})
        })
      )
  }
}
