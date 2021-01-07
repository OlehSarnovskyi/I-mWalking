import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {PostsState, SearchPostsAction} from "./store";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsPageComponent implements OnInit {

  posts = [];

  get hasPosts(): boolean {
    return !!this.posts.length
  }

  constructor(private store$: Store) {}

  ngOnInit(): void {
  }

  search(): void {
    this.store$.dispatch(new SearchPostsAction(this.store$.selectSnapshot(PostsState.formValue)))
  }
}
