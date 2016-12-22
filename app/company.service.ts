import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Location }     from '@angular/common';
import { Component, Input, OnInit, Output} from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { SharedService }  from './shared.service';


import 'rxjs/add/operator/toPromise';

import { Company } from './company';
import { Device } from './device';
import { User } from './user';

import { HttpClient }   from './httpClient';



@Injectable()
export class CompanyService implements OnInit{



constructor(private http: HttpClient,     
private location: Location,
private ss: SharedService, ) {}


ngOnInit(): void {}

/*
getCompany(id: number): Promise<Company> {
return this.getCompanies()
           .then(companies => companies.find(company => company.id === id));
}
*/


getCompany(id: number): Observable<Company> {
return this.http.get(`${this.ss.companyUrl}/${id}`)
       .map(response => response.json().data as Company);
       
}

/*
getCompanies(): Promise<Company[]> {
return this.http.get(this.ss.companyUrl)
       .toPromise()
       .then(response => response.json().data as Company[])
       .catch(this.handleError);


}
*/

getCompanies(): Observable<Company[]> {
return this.http.get(this.ss.companyUrl)
       .map(response => response.json().data as Company[]);
       }




private handleError(error: any): Promise<any> {
console.error('An error occurred', error); // for demo purposes only
alert(error);
this.location.back();

return Promise.reject(error.message || error);


}



/*
update(company: Company): Promise<Company> {
  const url = `${this.ss.companyUrl}/${company.id}`;
  return this.http
    .put(url, JSON.stringify(company), {headers: this.headers})
    .toPromise()
    .then(() => company)
    .catch(this.handleError);
}
*/

update(company: Company): Observable<Company> {
  const url = `${this.ss.companyUrl}/${company.id}`;
  return this.http
    .put(url, JSON.stringify(company))
    .map(response => response.json());
    
}
       



/*
delete(company: Company): boolean{
  var delIt = false;
    var r = confirm('Sei sicuro di voler eliminare la company con id ' + company.id + '?');
      if (r) {
        console.log('true');
        var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
        if (r2) {
        console.log('true');
          delIt = true;
        }

  }
  if (!delIt){
              console.log('return');

            return false;
            }
            
              console.log('deleted');

  const url = `${this.ss.companyUrl}/${company.id}`;
  this.http.delete(url).catch(this.handleError);
  return true;
  
}
*/

delete(company: Company): boolean{
  var delIt = false;
    var r = confirm('Sei sicuro di voler eliminare la company con id ' + company.id + '?');
      if (r) {
        console.log('true');
        var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
        if (r2) {
        console.log('true');
          delIt = true;
        }

  }
  if (!delIt){
              console.log('return');

            return false;
            }
            
              console.log('deleted');

  const url = `${this.ss.companyUrl}/${company.id}`;
  this.http.delete(url);
  return true;
  
}


/*
create(company: Company): Promise<Company> {
  return this.http
    .post(this.ss.companyUrl, JSON.stringify(company))
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}
*/

create(company: Company): Observable<Company> {
  return this.http
    .post(this.ss.companyUrl, JSON.stringify(company))
    .map(res => res.json().data);
    
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










}
