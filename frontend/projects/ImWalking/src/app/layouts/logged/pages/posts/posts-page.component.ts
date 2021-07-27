import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {PostsState, SearchPostsAction} from "./store";
import {Observable} from "rxjs";
import {Posts} from "./models";
import {Router} from "@angular/router";
import {LoginState} from "../../../auth";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoggedLayout} from "../../models";
import {GetMyDataAction, LoggedLayoutState} from "../../store";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsPageComponent implements OnInit {

  @Select(PostsState.list)
  posts$: Observable<Posts.PostsList>

  @Select(LoggedLayoutState.myData)
  myData$: Observable<LoggedLayout.User>

  constructor(private store$: Store,
              private router: Router,
              private jwtHelper: JwtHelperService) {}

  ngOnInit(): void {
  }

  search(): void {
    this.store$.dispatch(new SearchPostsAction(this.store$.selectSnapshot(PostsState.formValue)))
  }

  callAction(action: Posts.Action) {
    this[action]()
  }

  like() {
    const _id = this.jwtHelper.decodeToken(this.store$.selectSnapshot(LoginState.token)).userId
    this.store$.dispatch(new GetMyDataAction(_id))
    console.log('like')
    this.myData$.subscribe(val => {
      console.log('select', val);
    })
    // if () {
    // }
  }

  edit() {
    this.router.navigate(['view', 'crud-post'])
  }

  delete() {
    this.router.navigate(['view', 'crud-post'])
  }
}
