import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user'; 
import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';


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
      if(user.userName.includes(filter)){
    		    users.push(user);
        }
    }
}
    
    



    return users;
  }


  

}
