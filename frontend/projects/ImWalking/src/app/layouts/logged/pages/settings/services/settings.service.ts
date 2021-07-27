import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Settings} from "../models";

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) {}

  getMyData(id: string): Observable<Settings.User> {
    return this.http.get<Settings.User>(`/api/auth/my-data/${id}`)
  }

  updateMyData(body: any): Observable<any> {
    return this.http.put('/api/auth/my-data/update', body)
  }
}
