import { Pipe, PipeTransform } from '@angular/core';
import { Company } from './company'; 
import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';


@Pipe({name: 'filterCompanies'})

@Injectable()
export class FilterCompaniesPipe implements PipeTransform {
  transform(value: Company[], filter: string): Company[]{
    let companies: Company[] = [];
    for(let company of value){
    if(company.name.includes(filter) || company.didNumber.includes(filter) || company.email.includes(filter) || company.alphaname.includes(filter) || this.checkDid(company, filter) || this.checkUserEmail(company, filter)){
    		    companies.push(company);

    }
    }
    if(filter === ''){
        	companies = null;
        }



    return companies;
  }


  checkDid(company: Company, filter: string): boolean{
    let exist = false;
    for(let did of company.dids){
        if(did.number.includes(filter)){
            exist = true;
        }
       }
    return exist;

  }

  checkUserEmail(company: Company, filter: string): boolean{
    let exist = false;
    for(let user of company.users){
        if(user.email.includes(filter)){
            exist = true;
        }
       }
    return exist;

  }

}
