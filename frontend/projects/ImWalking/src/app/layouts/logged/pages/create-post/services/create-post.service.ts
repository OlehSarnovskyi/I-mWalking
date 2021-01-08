import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreatePost} from "../models";

@Injectable()
export class CreatePostService {

  constructor(private http: HttpClient) {}

  create(body: CreatePost.Form): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('/api/posts/create', body)
  }
}
