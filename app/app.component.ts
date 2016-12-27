import { Component, Input, OnInit } from '@angular/core';
import { LoginService}  from './login.service';
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

    

    




  	constructor(
  	private loginService: LoginService,
    private router: Router)
  	{}



  	doLogin(username, password){
      
     this.loginService.login(username, password);


        
      
     }

    doLogout(){
        this.loginService.isAuthenticated = false;
        window.location.href = '/';

    }



      
      
  }

