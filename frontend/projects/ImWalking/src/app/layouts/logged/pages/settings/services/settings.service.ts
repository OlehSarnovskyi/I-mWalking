import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Posts} from "../../posts";

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) {}

  getMyPosts(id: string): Observable<Posts.PostsList> {
    return this.http.get<Posts.PostsList>(`/api/posts/getMy/${id}`)
  }
}
