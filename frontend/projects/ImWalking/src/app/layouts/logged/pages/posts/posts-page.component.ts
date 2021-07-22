import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {PostsState, SearchPostsAction} from "./store";
import {Observable} from "rxjs";
import {Posts} from "./models";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsPageComponent implements OnInit {

  @Select(PostsState.list)
  posts$: Observable<Posts.PostsList>

  constructor(private store$: Store) {}

  ngOnInit(): void {
  }

  search(): void {
    this.store$.dispatch(new SearchPostsAction(this.store$.selectSnapshot(PostsState.formValue)))
  }

  callAction(action: Posts.Action) {
    this[action]()
  }

  like() {
    console.log('like')
  }
}
