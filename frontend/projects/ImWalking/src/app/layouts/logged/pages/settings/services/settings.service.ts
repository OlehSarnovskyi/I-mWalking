import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) {}

  // TODO any to User type
  getMyData(id: string): Observable<any> {
    return this.http.get(`/api/auth/my-data/${id}`)
  }

  updateMyData(body: any): Observable<any> {
    return this.http.put('/api/auth/my-data/update', body)
  }
}
