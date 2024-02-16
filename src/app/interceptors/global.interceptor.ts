import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token');
    const baseUrl: string = 'https://upskilling-egypt.com:/api/v1/';
    let newHeaders = {};

    if (token !== null) {
      newHeaders = {
        'Authorization': `Bearer ${token}`,
      };
    }

    newHeaders = request.clone({
      setHeaders: newHeaders, url: baseUrl + request.url
    })
    return next.handle(request);


    // const token = localStorage.getItem('token');
    // const baseUrl: string = 'https://upskilling-egypt.com/docs/api/v1/';
    // let newRequest = {};
    // if (token != null) {
    //   newRequest = {
    //     'Authorization': `Bearer ${token}`
    //   }
    // }
    // newRequest = request.clone({
    //   setHeaders: newRequest, url: baseUrl + request.url
    // })
    // return next.handle(newRequest);
  }
}
