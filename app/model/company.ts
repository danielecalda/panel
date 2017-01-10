import { Address }  from './address';
import { Did }  from './did';
import { User }  from './user';





export class Company{
	

	 companyId: number;
    name: string;
    alphaname: string;
    email: string;
    dids: string[];
    locked: boolean;
    address: Address;
    pbxId: number;
    chargebeeId: string;
    password1: string;
    username: string;
    
    
    


      constructor(companyId?: number, name?: string,  alphaname?: string,  dids?: string[],  locked?: boolean,  address?: Address, pbxId?: number, chargebeeId?: string){
      		this.companyId = companyId;
        	this.name = name;
          this.alphaname = alphaname;
        	this.dids = dids;
          this.locked = locked;
          this.address = address;
          this.pbxId = pbxId;
          this.chargebeeId = chargebeeId;
    
          
      }


      
}
