import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  // baseUrlLogin: string = `https://upskilling-egypt.com/#/Users/post_api_v1_Users_Login`;

  loginForm(userData: object): Observable<any> {
    return this._HttpClient.post(
      'Users/Login', userData)
  }


}
