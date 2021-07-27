import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoggedLayout} from "../../../models";

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) {}

  updateMyData(body: any): Observable<LoggedLayout.User> {
    return this.http.put<LoggedLayout.User>('/api/auth/my-data/update', body)
  }
}
