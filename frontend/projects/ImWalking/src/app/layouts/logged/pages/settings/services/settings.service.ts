import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) {}

  updateMyData(body: any): Observable<any> {
    return this.http.put('/api/auth/my-data/update', body)
  }
}
