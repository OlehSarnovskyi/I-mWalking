import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CrudPost} from "../models";
import {Posts} from "../../posts";

@Injectable()
export class CrudPostService {

  constructor(private http: HttpClient) {}

  getMyPosts(id: string): Observable<Posts.PostsList> {
    return this.http.get<Posts.PostsList>(`/api/posts/getMy/${id}`)
  }

  create(body: CrudPost.Form): Observable<Posts.Post> {
    return this.http.post<Posts.Post>('/api/posts/create', body)
  }

  deleteMyPost(id: string): Observable<{ message }> {
    return this.http.delete<{ message }>(`/api/posts/delete/${id}`)
  }
}
