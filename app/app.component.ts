import { Component, Input, OnInit } from '@angular/core';
import { LoginService}  from './login.service';
import { Account }  from './account';
import { Router }  from '@angular/router';
import { Location }                 from '@angular/common';
import { SharedService }    from './shared.service';





@Component({
moduleId: module.id,
	  selector: 'my-app',
	  templateUrl: 'app.component.html',
	  styleUrls: [ 'app.component.css' ]
})


export class AppComponent {
  	title = 'GodPanel';

    @Input()
    account: Account = new Account();

    




  	constructor(
  	private loginService: LoginService,
    private router: Router)
  	{}



  	doLogin(){
      
     if(this.loginService.login(this.account.username, this.account.password)){

        this.loginService.isAuthenticated = true;

        
      }
     }

    doLogout(){
        this.loginService.isAuthenticated = false;
        window.location.href = '/';

    }



      
      
  }

