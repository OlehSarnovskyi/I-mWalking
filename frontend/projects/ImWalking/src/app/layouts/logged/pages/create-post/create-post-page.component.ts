import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from "@ngxs/store";
import {CreatePostAction, CreatePostState} from "./store";
import {LoginState} from "../../../auth";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePostPageComponent {

  constructor(private store$: Store, private jwtHelper: JwtHelperService) {}

  create(): void {
    const _id = this.jwtHelper.decodeToken(this.store$.selectSnapshot(LoginState.token)).userId
    this.store$.dispatch(new CreatePostAction({
      _id,
      ...this.store$.selectSnapshot(CreatePostState.formValue)
    }))
  }
}
