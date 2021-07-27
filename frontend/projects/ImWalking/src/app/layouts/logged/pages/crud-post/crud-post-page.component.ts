import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {CreatePostAction, CrudPostState, DeleteMyPostAction, SearchMyPostsAction} from "./store";
import {LoginState} from "../../../auth";
import {JwtHelperService} from "@auth0/angular-jwt";
import {filter, switchMap, take} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Posts} from "../posts";
import {ResetForm, UpdateFormValue} from "@ngxs/form-plugin";

@Component({
  selector: 'app-crud-post-page',
  templateUrl: './crud-post-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudPostPageComponent implements OnInit {

  @Select(LoginState.token)
  token$: Observable<string>

  @Select(CrudPostState.myPosts)
  myPosts$: Observable<Posts.PostsList>

  // TODO refactor isUpdate
  isUpdate = false

  constructor(private store$: Store,
              private jwtHelper: JwtHelperService) {}

  ngOnInit() {
    this.token$.pipe(
      filter(val => !!val),
      take(1)
    ).subscribe(val => {
      const _id = this.jwtHelper.decodeToken(val).userId
      this.store$.dispatch(new SearchMyPostsAction(_id))
    })
  }

  create(): void {
    // TODO refactor
    const _id = this.jwtHelper.decodeToken(this.store$.selectSnapshot(LoginState.token)).userId


    // TODO REFACTOR to put method
    of(null).pipe(
      switchMap(() => this.isUpdate ? this.store$.dispatch(new DeleteMyPostAction(_id)) : of(null)),
      switchMap(() => this.store$.dispatch(new CreatePostAction({
        _id,
        ...this.store$.selectSnapshot(CrudPostState.formValue)
      })))
    ).subscribe(() => {
      this.store$.dispatch(new ResetForm({path: 'CrudPostState.form'}))
      this.isUpdate = false
    })
  }


  callAction(action: Posts.Action) {
    this[action]()
  }

  edit() {
    this.store$.dispatch(
      new UpdateFormValue({
        value: {
          ...this.store$.selectSnapshot(CrudPostState.myPosts).list[0]
        },
        path: 'CrudPostState.form'
      })
    )
    this.isUpdate = true
  }

  delete() {
    const _id = this.jwtHelper.decodeToken(this.store$.selectSnapshot(LoginState.token)).userId
    this.store$.dispatch(new DeleteMyPostAction(_id))
  }
}
