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

  deleteMyPost(id: string): Observable<{ message }> {
    return this.http.delete<{ message }>(`/api/posts/delete/${id}`)
  }
  // TODO any to User type
  getMyData(id: string): Observable<any> {
    return this.http.get(`/api/my-data/${id}`)
  }
}
