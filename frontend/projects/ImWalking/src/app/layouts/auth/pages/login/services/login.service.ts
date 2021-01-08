import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Login} from "../models";
import {tap} from "rxjs/operators";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  login(body: Login.Form): Observable<Login.SuccessResponse> {
    return this.http.post<Login.SuccessResponse>('/api/auth/login', body)
      .pipe(
        tap(response => {
          localStorage.setItem('IWToken', response.token)
        })
      )
  }
}
