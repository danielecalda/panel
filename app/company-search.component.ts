import { Component, OnInit, Input } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { CompanyService } from './services/company.service';
import { Company } from './company';
import { CompanySearch } from './company-search';
import { Location} from '@angular/common';
import { FilterCompaniesPipe} from './companies.pipe';
import { ErrorService }  from './services/error.service';


declare var $: any;



@Component({
  moduleId: module.id,
  selector: 'company-search',
  templateUrl: 'company-search.component.html',
  styleUrls: [ 'company-search.component.css' ]
  
})






export class CompanySearchComponent implements OnInit {


  companies: CompanySearch[] = [];
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

  




  openControlPanel(company: CompanySearch){
        var win = window.open('https://dev-controlpanel.voverc.com/' + '#/access/signin?admin=true&us=' + company.username + '&pw=' + company.password1, '_blank');
        win.focus();
     }


  
  

goToDetail(company: CompanySearch): void {
      let link = ['/detail', company.companyId];
      this.router.navigate(link);
      }


  

deleteCompany(company: CompanySearch){

      this.companyService.delete(company)
      .subscribe(
          data => {
            this.companyService.getCompanies()
              .subscribe(
               data => {
                this.companies = data;
                },
                error => {
                  this.errorService.errorPopUp(error._body, error.status);
                });
            },
          error => {
            alert(error);
          });
      }


      
}
