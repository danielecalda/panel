import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable }   from 'rxjs';

import { User } from '../user';
import { Company } from '../company';

import { HttpClient }   from '../httpClient';





@Injectable()
export class UserService{


	private userUrl = 'app/user';  // URL to web api

  

	constructor(private http: HttpClient) { }

	getUsersForCompany(id: number): Observable<User[]>{
    let headers = new Headers();
    headers.append('companyId', String(id));
		return this.http.get(`https://devapi.voverc.com/api/v2/companies/${id}/users`)
       		.map(response => response.json())
       		
	}


  getUsersForName(name: string): Observable<User[]>{
    return this.http.get(`app/user?userName=${name}`)
          .map(response => response.json().data as User[])
  }




	create(companyId: number, user: User): Observable<User> {
  		return this.http
    		.post(`https://devapi.voverc.com/api/v2/companies/${companyId}/users`, JSON.stringify(user))
    		.map(res => res.json().data)
	}

	update(user: User): Observable<User> {
  		const url = `${this.userUrl}/${user.userId}`;
  		return this.http
    		.put(url, JSON.stringify(user))
    		.map(() => user)
}

  delete(company: Company, user: User){
    
    const url = `https://devapi.voverc.com/api/v2/companies/${company.companyId}/users/${user.userId}`;
    return this.http.delete(url)
      .map(res => res.json().data);
          
  }



	
	

}