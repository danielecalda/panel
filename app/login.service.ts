import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class LoginService {
    
    private tokenUrl = `https://devapi.voverc.com/api/token`;
    private tokenHeaders = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    authToken = null;
    isAuthenticated = false;
 
    public headers = new Headers({'Content-Type': 'application/json'});
 
    constructor(private http: Http) { }
 
    login(username: string, password: string){
        
            this.http
                .post(this.tokenUrl,
                    `grant_type=password&username=${username}&password=${password}`,
                    {headers: this.tokenHeaders})
                .toPromise()
                .then(response => {
                    this.isAuthenticated = true;
                    this.authToken = response.json().access_token
                    })

        }
    
}