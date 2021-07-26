import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CrudPost} from "../models";

@Injectable()
export class CrudPostService {

  constructor(private http: HttpClient) {}

  create(body: CrudPost.Form): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('/api/posts/create', body)
  }
}
