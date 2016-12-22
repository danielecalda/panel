import { Component, Input, OnInit, Output } from '@angular/core';
import { CompanyService }  from './company.service';
import { Router } from '@angular/router';




import { Admin } from './admin';
import { BillingDetails } from './billing-details';
import { Company } from './company';
import { Device } from './device';
import { Did } from './did';
import { User } from './user';









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
      admin = new Admin();
      @Input()
      company = new Company();
      @Input()
      billing = new BillingDetails();
      

      creationCompleted: boolean = false;
      repeatedPwd: string;
      msg: string;
      prefix: string;
      countryCode: string;

      constructor(
          private router: Router,
          private companyService: CompanyService) { }



      add(){
          var r = confirm('Sei sicuro di voler INSERIRE la nuova company?');
          if(r){
        
        
            if(this.admin.password !== this.repeatedPwd){
              this.msg = 'le password non corrispondono';
            }
            else{
                this.company.alphaname = this.company.name.replace(/ /g, "").toLowerCase();
                this.company.admin = this.admin;
                this.company.dids = [];
                //default unlocked
                this.company.locked = true;
                
                this.company.billing = this.billing;
                this.company.users = [];
                
                this.companyService.create(this.company)
                  .subscribe(
                    data => {
                      console.log('yes');
                      this.creationCompleted = true;
                    },
                    error => {
                      alert(error);
                    });
               
                }
              }
               
            }


      goToSearch(): void {
        this.router.navigateByUrl('/search');
      }

      generate() {
          this.admin.password = this.companyService.randomPassword(8);
          this.repeatedPwd = this.admin.password;
      }




}
