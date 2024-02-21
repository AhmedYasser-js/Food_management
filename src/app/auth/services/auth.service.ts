import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  // baseUrlLogin: string = `https://upskilling-egypt.com/#/Users/post_api_v1_Users_Login`;

  onLogin(data: object): Observable<any> {
    return this._HttpClient.post('Users/Login', data)
  }

  onRegister(data: any): Observable<any> {
    return this._HttpClient.post('Users/Register', data);
  }

  onVerify(data: any): Observable<any> {
    console.log(data);
    return this._HttpClient.put('Users/verify', data);
  }


}
