import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {PostsState, SearchPostsAction} from "./store";
import {Observable} from "rxjs";
import {Posts} from "./models";
import {Router} from "@angular/router";
import {LoginState} from "../../../auth";
import {JwtHelperService} from "@auth0/angular-jwt";
import {GetMyDataAction, LoggedLayoutState} from "../../store";
import {filter, take} from "rxjs/operators";

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsPageComponent {

  @Select(PostsState.list)
  posts$: Observable<Posts.PostsList>

  constructor(private store$: Store,
              private router: Router,
              private jwtHelper: JwtHelperService) {}

  search(): void {
    this.store$.dispatch(new SearchPostsAction(this.store$.selectSnapshot(PostsState.formValue)))
  }

  callAction(action: Posts.Action) {
    this[action]()
  }

  like() {
    const _id = this.jwtHelper.decodeToken(this.store$.selectSnapshot(LoginState.token)).userId
    this.store$.dispatch(new GetMyDataAction(_id))
    this.store$.select(LoggedLayoutState.filledTelephoneAndContactLinks)
      .pipe(
        filter(val => val !== undefined),
        take(1)
      )
      .subscribe(val => {
        if (val) {
          // TODO logic for sending email
        } else {
          alert('Fill your telephone and contact links please')
        }
      })
  }

  edit() {
    this.router.navigate(['view', 'crud-post'])
  }

  delete() {
    this.router.navigate(['view', 'crud-post'])
  }
}
