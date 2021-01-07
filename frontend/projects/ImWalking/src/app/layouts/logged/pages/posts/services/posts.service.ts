import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "../models";

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {}

  search(body: Posts.Form): Observable<Posts.PostsList> {
    return this.http.post<Posts.PostsList>('/api/posts/search', body)
  }
}
