import { Injectable, OnInit}     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { Account } from './account';

import { SharedService }  from './shared.service';

@Injectable()
export class LoginService implements OnInit{


  

  isAuthenticated = false;
  authToken: string = 'token';



  
  
  private accountUrl = 'app/account';  // URL to web api

  constructor(private http: Http,
  private ss: SharedService) {}

  ngOnInit(){
     
  }


  checkPassword(password: string, repeatedPassword: string): boolean{
  		if(password === repeatedPassword){
  			return true;
  		}
  		else{
  			return false;
  		}
  }

  loginSimple(username: string, password: string): boolean{
      
      if(username === 'pippo' && password === 'voverc'){

          console.log('yes');
          return true;
          }
          else{
              alert('bad username or password');

            return false;
          }
      
        }

  /* 
  login(account: Account){
      var postData = 'grant_type=password&username=' + account.username + '&password=' + account.password;
        this.http.post(apiUrl + 'api/token', postData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
          .subscribe(
            data => {
              this.ss.authToken = data.access_token;
              this.ss.isAuthenticated = true;
              },
            error => {
                alert('bad username or password');
              });
  }
  */




  

 



  login(username: string, password: string): boolean{
      if(username === 'pippo' && password === 'voverc'){
          console.log('log in effettuato');

          return true;

      }
      else{
        console.log('bad username or password');
        alert('bad username or password');
        return false;

      }

  }

  

  


  private handleError(error: any): Promise<any> {
console.error('An error occurred', error); // for demo purposes only
return Promise.reject(error.message || error);
}




  
  


}