import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Login} from "../models";
import {tap} from "rxjs/operators";
import {TOKEN_NAME} from "@modules";

@Injectable()
export class LoginService {
  // TODO check Injectable to app.module
  constructor(private http: HttpClient) {}

  login(body: Login.Form): Observable<Login.SuccessResponse> {
    return this.http.post<Login.SuccessResponse>('/api/auth/login', body)
      .pipe(
        tap(response => {
          localStorage.setItem(TOKEN_NAME, response.token)
        })
      )
  }
}
