import { BillingDetails }  from './billing-details';
import { Admin }  from './admin';
import { Did }  from './did';
import { User }  from './user';





export class Company{
	

	id: number;
    name: string;
    alphaname: string;
    didNumber: string;
    email: string;
    locked: boolean;
    dids: Did[];
    credit: number;
    subscription: string;
    admin: Admin;
    billing: BillingDetails;
    users: User[];
    couponCode: string;
    trialDays: number;
    


      constructor(id?: number, name?: string,  alphaname?: string,  didNumber?: string, email?: string, locked?: boolean,  dids?: Did[], credit?: number, subscription?: string, admin?: Admin,  billing?: BillingDetails, users?: User[], couponCode?: string,
      trialDays?: number){
      		this.id = id;
        	this.name = name;
          this.alphaname = alphaname;
        	this.didNumber = didNumber;
        	this.email = email;
          this.locked = locked;
        	this.dids = dids;
          this.credit = credit;
          this.subscription = subscription;
          this.admin = admin;
          this.billing = billing;
          this.users = users;
          this.couponCode = couponCode;
          this.trialDays = trialDays;
          
      }


      
}
