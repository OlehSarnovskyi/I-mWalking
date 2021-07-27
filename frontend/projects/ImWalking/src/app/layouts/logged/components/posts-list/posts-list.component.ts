import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Posts} from "../../pages";
import {LoginState} from "../../../auth";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styles: [`
    .example-card {
      max-width: 400px;
    }

    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }

    mat-list-item {
      height: auto !important;
      display: flex !important;
      justify-content: center;
      margin-top: 10px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  @Input() posts: Posts.PostsList;

  @Output() actionEmitter = new EventEmitter<Posts.Action>()

  constructor(private store$: Store,
              private jwtHelper: JwtHelperService) {}

  actions(authorPostId: string): Posts.Action[] {
    const myId = this.jwtHelper.decodeToken(this.store$.selectSnapshot(LoginState.token)).userId
    return myId === authorPostId ? ['edit', 'delete'] : ['like']
  }
}
