import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Location }     from '@angular/common';
import { Component, Input, OnInit, Output} from '@angular/core';
import { Observable }        from 'rxjs/Observable';




import 'rxjs/add/operator/toPromise';

import { Company } from '../model/company';
import { OnBoarding } from '../model/onboarding';


import { Device } from '../model/device';
import { User } from '../model/user';

import { HttpClient }   from './httpClient';



@Injectable()
export class CompanyService implements OnInit{



constructor(private http: HttpClient,     
private location: Location ) {}


ngOnInit(): void {}




getCompany(id: number): Observable<Company> {
return this.http.get(`https://devapi.voverc.com/api/v2/companies/${id}`)
       .map(this.extractData);
       
}



getCompanies(): Observable<Company[]> {
return this.http.get(`https://devapi.voverc.com/api/company`)
       .map(this.extractData);
       }




update(company: Company): Observable<Company> {
  const url = `https://devapi.voverc.com/api/company/${company.companyId}`;
  return this.http
    .put(url, JSON.stringify(company))
    .map(this.extractData);
    
}
       

delete(company: Company): Observable<Company>{
  
      
  const url = `https://devapi.voverc.com/api/v2/companies/${company.companyId}`;
  return this.http.delete(url)
      .map(this.extractData);
    
  }






create(onBoarding: OnBoarding): Observable<OnBoarding>{
  console.log(JSON.stringify(onBoarding));
  return this.http
    .post(`https://devapi.voverc.com/api/v2/onboarding/trial`, JSON.stringify(onBoarding))
    .map(this.extractData);


    
}


private extractData(res: Response) {
    let body: Response;

    // check if empty, before call json
    if (res.text()) {
        body = res.json();
    }

    return body || {};
}


randomPassword(length: number) {
    let chars = "abcdefghijklmnopqrstuvwxyz!@#$%&()ABCDEFGHIJKLMNOP1234567890";
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
