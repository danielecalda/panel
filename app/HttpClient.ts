import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import { LoginService }  from './login.service';

@Injectable()
export class HttpClient {

  constructor(private http: Http, private loginService: LoginService) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'bearer ' +
      this.loginService.authToken); 
    headers.append('Content-Type', 'application/json'); 
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(headers.toJSON());
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(headers.toJSON());
    return this.http.post(url, data, {
      headers: headers
    });
  }


  put(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(headers.toJSON());
	return this.http.post(url, data, {
      headers: headers
    });
  }


  delete(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(headers.toJSON());
    return this.http.post(url,  {
      headers: headers
    });

  }
}