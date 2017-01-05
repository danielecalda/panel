import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptionsArgs} from '@angular/http';

import { AuthService }   from './services/auth.service';

import { AccountService } from './services/account.service';






@Injectable()
export class HttpClient {

  constructor(private http: Http, private authService: AuthService, private currentAccount: AccountService ) {}

  createAuthorizationHeader(headers: Headers) {
    
    headers.append('Content-Type', 'application/json'); 
    headers.append('Authorization', 'Bearer ' + this.currentAccount.current.token);
    
  }




  get(url: string, options?: RequestOptionsArgs) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(headers.toJSON());
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url: string, data: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(headers.toJSON());
    return this.http.post(url, data, {
      headers: headers
    });
  }


  put(url: string , data: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(headers.toJSON());
	return this.http.put(url, data, {
      headers: headers
    });
  }


  delete(url: string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(headers.toJSON());
    return this.http.delete(url,  {
      headers: headers
    });

  }
}