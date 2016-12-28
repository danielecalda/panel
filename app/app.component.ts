import { Component, Input, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Location }                 from '@angular/common';
import { SharedService }    from './shared.service';

import { AuthService }   from './auth.service';



@Component({
moduleId: module.id,
	  selector: 'my-app',
	  templateUrl: 'app.component.html',
	  styleUrls: [ 'app.component.css' ]
})


export class AppComponent {
  	title = 'GodPanel';

    

    




  	constructor(
  	private authService: AuthService,
    private router: Router)
  	{}



  	doLogin(username, password){
      
     this.authService.getAuthToken(username, password);


        
      
     }

    doLogout(){
        this.authService.isAuthenticated = false;
        window.location.href = '/';

    }



      
      
  }

