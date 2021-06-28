import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Posts} from "../../models";
import {HttpClient} from "@angular/common/http";

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
export class PostsListComponent implements OnInit {

  @Input() posts: Posts.PostsList;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {}

  // TODO refactor
  delete(author: string) {
    this.httpClient.delete(`/api/posts/delete/${author}`).subscribe()
  }
}
