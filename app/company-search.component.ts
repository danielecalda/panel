import { Component, OnInit, Input } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { CompanyService } from './company.service';
import { Company } from './company';
import { Location} from '@angular/common';
import { FilterCompaniesPipe} from './companies.pipe';


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
    private router: Router) {}


  // Push a search term into the observable stream.


  

  ngOnInit(): void {
  }


  


  listCompanies(){
      this.companyService.getCompanies()
      .subscribe(
          data => {
            this.companies = data;
            },
          error => {
            alert(error);
          });

  }
  

  goToDetail(company: Company): void {
      let link = ['/detail', company.id];
      this.router.navigate(link);
      }


  

  deleteCompany(company: Company, index: number){

      if(this.companyService.delete(company)){
          this.companyService.getCompanies()
          .subscribe(
          data => {
            this.companies = data;
            },
          error => {
            alert(error);
          });
        }
      }


      
}
