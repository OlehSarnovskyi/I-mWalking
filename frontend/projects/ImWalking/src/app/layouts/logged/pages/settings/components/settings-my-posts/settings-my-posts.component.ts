import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {DeleteMyPostAction, SearchMyPostsAction, SettingsState} from "../../store";
import {Observable} from "rxjs";
import {Posts} from "../../../posts";
import {LoginState} from "../../../../../auth";
import {JwtHelperService} from "@auth0/angular-jwt";
import {filter, take} from "rxjs/operators";

@Component({
  selector: 'app-settings-my-posts',
  templateUrl: './settings-my-posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsMyPostsComponent implements OnInit {

  @Select(LoginState.token)
  token$: Observable<string>

  @Select(SettingsState.myPosts)
  myPosts$: Observable<Posts.PostsList>

  constructor(private store$: Store, private jwtHelper: JwtHelperService) {}

  ngOnInit(): void {
    this.token$.pipe(
      filter(val => !!val),
      take(1)
    ).subscribe(val => {
        const _id = this.jwtHelper.decodeToken(val).userId
        this.store$.dispatch(new SearchMyPostsAction(_id))
    })
  }

  callAction(action: Posts.Action) {
    this[action]()
  }

  edit() {
    console.log('edit');
  }

  delete() {
    const _id = this.jwtHelper.decodeToken(this.store$.selectSnapshot(LoginState.token)).userId
    this.store$.dispatch(new DeleteMyPostAction(_id))
  }
}
