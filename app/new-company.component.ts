import { Component, Input, OnInit, Output } from '@angular/core';
import { CompanyService }  from './services/company.service';
import { Router } from '@angular/router';




import { OnBoarding } from './onboarding';

import { ErrorService }  from './services/error.service';



declare var $: any;






@Component({
moduleId: module.id,
  selector: 'my-new-company',
  templateUrl: 'new-company.component.html',
  styleUrls: [ 'new-company.component.css' ],
})


export class NewCompanyComponent {

      cities: string[] = ['roma', 'padova', 'milano', 'napoli', 'firenze', 'torino', 'palermo', 'cagliari', 'venezia'];
      states: string[] = ['italy', 'france', 'england', 'spain', 'portugal', 'unites states'];
      
      @Input()
      onBoarding: OnBoarding = new OnBoarding();
      

      repeatedPwd: string;
      msg: string;

      constructor(
          private router: Router,
          private companyService: CompanyService, private errorService: ErrorService) { }


          
      add(){
          var r = confirm('Sei sicuro di voler INSERIRE la nuova company?');
          if(r){
        
        
            if(this.onBoarding.password !== this.repeatedPwd){
              this.msg = 'le password non corrispondono';
            }
            else{
                
               
                $('#myModalCharge').modal('show');
                this.companyService.create(this.onBoarding)
                  .subscribe(

                    data => {
                    $('#myModalCharge').modal('hide');

                      console.log('yes');
                      this.router.navigate(['/search']);

                    },
                    error => {
                      $('#myModalCharge').modal('hide');
                      this.errorService.errorPopUp(error._body, error.status);
                      console.log(error);
                      
                    });
               
                }
              }
               
            }
            


      goToSearch(): void {
        this.router.navigateByUrl('/search');
      }

      generate() {
          this.onBoarding.password = this.companyService.randomPassword(8);
          this.repeatedPwd = this.onBoarding.password;
      }




}
