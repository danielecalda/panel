import {Device} from './device';



export class User{
	userId: number;
  firstName: string;
  lastName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    enabled: boolean;
    isAdministrator: boolean;
    extension: string;
    devices: Device[]; 
    


    constructor(userId?: number, firstName?: string, lastName?: string, email?: string,  phoneNumber?: string,  enabled?: boolean, isAdministrator?: boolean, extension?: string){
    		  this.userId = userId;
          this.firstName = firstName;
          this.lastName = lastName;
          this.email = email;
          this.phoneNumber = phoneNumber;
          this.enabled = enabled;
          this.isAdministrator = isAdministrator;
          this.extension = extension;

    }


}
