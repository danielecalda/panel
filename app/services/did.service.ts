import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable }   from 'rxjs';

import { User } from '../user';
import { Company } from '../company';
import { Did }  from '../did';

import { HttpClient }   from '../httpClient';





@Injectable()
export class DidService{



  

	constructor(private http: HttpClient) { }

	getDids(pbxId: number): Observable<Did[]>{
    
  
		return this.http.get(`https://devapi.voverc.com/api/v2/pbxes/${pbxId}/dids`)
       		.map(response => response.json())
       		
	}


	update(pbxId: number, didId: number, did: Did){
		return this.http.put(`https://devapi.voverc.com/api/v2/pbxes/${pbxId}/dids/${didId}`, JSON.stringify(did))
			.map(response => response.json());
	}


  


	
	

}