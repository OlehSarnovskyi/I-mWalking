import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Posts} from "../../pages";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styles: [
    `.example-card {
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
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  @Input() actions: Posts.Action[]

  @Input() posts: Posts.PostsList;

  @Output() actionEmitter = new EventEmitter<Posts.Action>()
}
