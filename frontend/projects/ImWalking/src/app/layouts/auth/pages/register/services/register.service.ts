import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Register} from "../models";

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {}

  register(body: Register.Form): Observable<Register.SuccessResponse> {
    return this.http.post<Register.SuccessResponse>('/api/auth/register', body)
  }
}
