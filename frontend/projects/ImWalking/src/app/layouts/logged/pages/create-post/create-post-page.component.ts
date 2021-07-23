import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {CreatePostAction, CreatePostState} from "./store";
import {LoginState} from "../../../auth";
import {JwtHelperService} from "@auth0/angular-jwt";
import {DeleteMyPostAction} from "../settings";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePostPageComponent implements OnInit {

  isUpdate = false

  constructor(private store$: Store,
              private jwtHelper: JwtHelperService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(val => {
      this.isUpdate = !!val.update === true
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
        ...this.store$.selectSnapshot(CreatePostState.formValue)
      })))
    ).subscribe()
  }
}
