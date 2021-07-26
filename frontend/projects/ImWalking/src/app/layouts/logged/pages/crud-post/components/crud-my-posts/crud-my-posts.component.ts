import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {CrudPostState, DeleteMyPostAction, SearchMyPostsAction} from "../../store";
import {Observable} from "rxjs";
import {Posts} from "../../../posts";
import {LoginState} from "../../../../../auth";
import {JwtHelperService} from "@auth0/angular-jwt";
import {filter, take} from "rxjs/operators";
import {Router} from "@angular/router";
import {UpdateFormValue} from "@ngxs/form-plugin";

@Component({
  selector: 'app-crud-my-posts',
  templateUrl: './crud-my-posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudMyPostsComponent implements OnInit {

  @Select(LoginState.token)
  token$: Observable<string>

  @Select(CrudPostState.myPosts)
  myPosts$: Observable<Posts.PostsList>

  constructor(
    private store$: Store,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

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
    this.router.navigate(['view', 'crud-post'], {queryParams: {update: true}}).then(() => {
      this.store$.dispatch(
        new UpdateFormValue({
          value: {
            ...this.store$.selectSnapshot(CrudPostState.myPosts).list[0]
          },
          path: 'CrudPostState.form'
        })
      )
    })
  }

  delete() {
    const _id = this.jwtHelper.decodeToken(this.store$.selectSnapshot(LoginState.token)).userId
    this.store$.dispatch(new DeleteMyPostAction(_id))
  }
}
