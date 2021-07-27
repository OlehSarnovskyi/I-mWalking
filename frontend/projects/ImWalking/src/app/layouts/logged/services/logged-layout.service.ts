import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoggedLayout} from "../models";

@Injectable()
export class LoggedLayoutService {

  constructor(private http: HttpClient) {}

  getMyData(id: string): Observable<LoggedLayout.User> {
    return this.http.get<LoggedLayout.User>(`/api/auth/my-data/${id}`)
  }
}
