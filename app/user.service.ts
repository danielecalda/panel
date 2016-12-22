import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable }   from 'rxjs';

import { User } from './user';
import { Company } from './company';

import { HttpClient }   from './httpClient';





@Injectable()
export class UserService{


	private userUrl = 'app/user';  // URL to web api

	constructor(private http: HttpClient) { }

	getUsersForCompany(company: Company): Observable<User[]>{
		return this.http.get(`app/company/${company.id}?users`)
       		.map(response => response.json().data as User[])
       		
	}


  getUsersForName(name: string): Observable<User[]>{
    return this.http.get(`app/user?userName=${name}`)
          .map(response => response.json().data as User[])
  }




	create(user: User): Observable<User> {
  		return this.http
    		.post(this.userUrl, JSON.stringify(user))
    		.map(res => res.json().data)
	}

	update(user: User): Observable<User> {
  		const url = `${this.userUrl}/${user.id}`;
  		return this.http
    		.put(url, JSON.stringify(user))
    		.map(() => user)
}

  delete(user: User){
    var delIt = false;
    var r = confirm('Sei sicuro di voler eliminare lo user con id ' +  user.id + '?');
      if (r) {
        var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
        if (r2) {
          delIt = true;
        }
    }
    if (!delIt){
    return;
      }
    const url = `${this.userUrl}/${user.id}`;
    this.http.delete(url);
          
  }



	
	

}