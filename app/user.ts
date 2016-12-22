import {Device} from './device';



export class User{
	id: number;
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
    enabled: boolean;
    isAdministrator: boolean;
    


    constructor(id?: number, userName?: string, email?: string,  phoneNumber?: string, password?: string,  enabled?: boolean, isAdministrator?: boolean){
    		  this.id = id;
          this.userName = userName;
          this.email = email;
          this.password = password;
          this.phoneNumber = phoneNumber;
          this.enabled = enabled;
          this.isAdministrator = isAdministrator;

    }


}
