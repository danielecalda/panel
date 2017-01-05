import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Location }     from '@angular/common';
import { Component, Input, OnInit, Output} from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { SharedService }  from './shared.service';


import 'rxjs/add/operator/toPromise';

import { Company } from '../company';
import { CompanySearch } from '../company-search';
import { OnBoarding } from '../onboarding';


import { Device } from '../device';
import { User } from '../user';

import { HttpClient }   from '../httpClient';



@Injectable()
export class CompanyService implements OnInit{



constructor(private http: HttpClient,     
private location: Location,
private ss: SharedService, ) {}


ngOnInit(): void {}




getCompany(id: number): Observable<Company> {
return this.http.get(`https://devapi.voverc.com/api/v2/companies/${id}`)
       .map(response => response.json());
       
}



getCompanies(): Observable<CompanySearch[]> {
return this.http.get(`https://devapi.voverc.com/api/company`)
       .map(response => response.json());
       }









update(company: Company): Observable<Company> {
  const url = `https://devapi.voverc.com/api/company/${company.companyId}`;
  return this.http
    .put(url, JSON.stringify(company))
    .map(response => response.json());
    
}
       





delete(company: CompanySearch): Observable<CompanySearch>{
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
            
      console.log('deleted');

  const url = `https://devapi.voverc.com/api/company/${company.companyId}`;
  return this.http.delete(url)
    .map(response => response.json());
  
  
}




create(onBoarding: OnBoarding){
  console.log(JSON.stringify(onBoarding));
  return this.http
    .post(`https://devapi.voverc.com/api/v2/onboarding/trial`, JSON.stringify(onBoarding))
    .map(res => res.json());

    
}


randomPassword(length: number) {
    let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    let pass = "";
    for (let x = 0; x < length; x++) {
        let i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;

}


unlockAccount(company: Company): Observable<Company>{
    return this.http.put(`https://devapi.voverc.com/api/unlockaccount/${company.companyId}`, null)
      .map(response => response.json());
}


lockAccount(company: Company): Observable<Company>{
    return this.http.get(`https://devapi.voverc.com/api/lockaccount/${company.companyId}`)
      .map(response => response.json());
}










}
