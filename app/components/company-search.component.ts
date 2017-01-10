import { Component, OnInit, Input } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


import { Location} from '@angular/common';

import { Company } from '../model/company';

import { FilterCompaniesPipe} from '../pipes/companies.pipe';

import { ErrorService }  from '../services/error.service';
import { CompanyService } from '../services/company.service';


declare var $: any;



@Component({
  moduleId: module.id,
  selector: 'company-search',
  templateUrl: 'company-search.component.html',
  styleUrls: [ 'company-search.component.css' ]
  
})






export class CompanySearchComponent implements OnInit {


  companies: Company[] = [];
  @Input()
  filter: string;


  constructor(
    private companyService: CompanyService, 
    private router: Router, private errorService: ErrorService) {}


  // Push a search term into the observable stream.


  

  ngOnInit(): void {


  


      $('#myModalCharge').modal('show');

  this.companyService.getCompanies()
      .subscribe(
          data => {
            this.companies = data;
            $('#myModalCharge').modal('hide');

            },
          error => {
          $('#myModalCharge').modal('hide');
            this.errorService.errorPopUp(error._body, error.status);
          });    
    
  }


  refresh(){
  $('#myModalCharge').modal('show');
    this.companyService.getCompanies()
      .subscribe(
          data => {
            this.companies = data;
            $('#myModalCharge').modal('hide');

            },
          error => {
          $('#myModalCharge').modal('hide');
            this.errorService.errorPopUp(error._body, error.status);

          });
  }


  listAllCompanies(){
    this.filter = "all";
  }

  




  openControlPanel(company: Company){
        var win = window.open('https://dev-controlpanel.voverc.com/' + '#/access/signin?admin=true&us=' + company.username + '&pw=' + company.password1, '_blank');
        win.focus();
     }


  
  

goToDetail(company: Company): void {
      let link = ['/detail', company.companyId];
      this.router.navigate(link);
      }


  

deleteCompany(company: Company){
      var delIt = false;
    var r = confirm('Sei sicuro di voler eliminare la company con id ' + company.companyId + '?');
      if (r) {
        console.log('true');
        var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
        if (r2) {
        console.log('true');
          delIt = true;
        }

      }
    if (!delIt){
      
      
      return;
      }

      
      $('#myModalCharge').modal('show');
      this.companyService.delete(company)
        .subscribe(() => {
            this.companyService.getCompanies()
                .subscribe(
                         data => {
                          this.companies = data;
                          $('#myModalCharge').modal('hide');
                          },
                          error => {
                            this.errorService.errorPopUp(error._body, error.status);
                            $('#myModalCharge').modal('hide');
                          });
                          this.filter = "";
                      },
                    error => {
                        this.errorService.errorPopUp(error._body, error.status);
                        $('#myModalCharge').modal('hide');
                    });
        
                
      }


      
      
}
