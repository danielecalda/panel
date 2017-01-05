import { Component, Input, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Location }                 from '@angular/common';
import { SharedService }    from './services/shared.service';
import { CookieService } from 'angular2-cookie/core';


import { AuthService }   from './services/auth.service';

import { AccountService } from './services/account.service';
import { ErrorService }  from './services/error.service';



@Component({
moduleId: module.id,
	  selector: 'my-app',
	  templateUrl: 'app.component.html',
	  styleUrls: [ 'app.component.css' ]
})


export class AppComponent implements OnInit {
  	title = 'GodPanel';

    errorStatus: string;
    errorBody: string;

    




  	constructor(
  	private authService: AuthService,
    private router: Router, private cookieService: CookieService, private currentAccount: AccountService,
    private location: Location, private errorService: ErrorService)
  	{}


    ngOnInit(){

   
        if(this.cookieService.get("authToken")!==undefined){
            this.authService.isAuthenticated = true;
            console.log(this.cookieService.get("authToken"));
            this.currentAccount.current.token = this.cookieService.get("authToken");
        }
        
    }

    

  removeCookie(key: string){
        return this.cookieService.remove(key);
    }



  	doLogin(username: string, password: string){
    


      
      this.authService.getAuthToken(username, password);
      


        
      
     }

    doLogout(){
        
                    this.removeCookie("authToken");
                    
                    this.authService.isAuthenticated = false;
                    window.location.href = '/';


        

    }



      
      
  }

