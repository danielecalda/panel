import { Pipe, PipeTransform } from '@angular/core';
import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { User } from '../model/user'; 


@Pipe({name: 'filterUsers'})

@Injectable()
export class FilterUsersPipe implements PipeTransform {
  transform(value: User[], filter: string): User[]{
    let users: User[] = [];
    if(filter === ''){
      users = value;
      }
      else{
    
    for(let user of value){
      if(user.firstName.toLowerCase().includes(filter) || user.lastName.toLowerCase().includes(filter) || user.email.toLowerCase().includes(filter)){
    		    users.push(user);
        }
    }
}
      return users;
  }


  

}
