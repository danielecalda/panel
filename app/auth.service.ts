import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AccountService } from './account.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    private apiUrl = `https://devapi.voverc.com`;
    private tokenUrl = `${this.apiUrl}/api/token`;
    private tokenHeaders = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    public headers = new Headers({'Content-Type': 'application/json'});

    public isAuthenticated = false;

    constructor(private http: Http,
                private currentAccount: AccountService) { }

    getAuthToken(username: string, password: string): Promise<void>{
        if(this.currentAccount.current.token){
            return Promise.resolve();
        }
        else{
            return this.http
                .post(this.tokenUrl,
                    `grant_type=password&username=${username}&password=${password}`,
                    {headers: this.tokenHeaders})
                .toPromise()
                .then(response => {
                    this.headers.append('Authorization', 'Bearer ' + response.json().access_token);
                    this.currentAccount.current.setToken(response.json().access_token);
                    this.isAuthenticated = true;
                })
        }
    }
}