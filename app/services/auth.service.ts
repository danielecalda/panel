import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';


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
                private currentAccount: AccountService,  private cookieService: CookieService) { }

    

    getAuthToken(username: string, password: string): void{

    let postData: string = 'grant_type=password&username=' + username + ' &password=' + password ;
        
            this.http
                .post('https://devapi.voverc.com/api/token',
                    postData,
                    {headers: this.tokenHeaders})
                .map(res => res.json())
                .subscribe(
                    data => {
                        this.currentAccount.current.setToken(data.access_token);
                        var expireDate = new Date(new Date().getTime() + (1000 * data.expires_in));
                        this.cookieService.put("authToken", data.access_token, {expires: expireDate});

                        this.isAuthenticated = true; 
                        
                        },
                    error => {
                        alert("bad username or password");
                    }
                );
        
    }
}