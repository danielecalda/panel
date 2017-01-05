import { Address }  from './address';
import { Did }  from './did';
import { User }  from './user';





export class Company{
	

	   companyId: number;
    name: string;
    alphaName: string;
    dids: string[];
    locked: boolean;
    address: Address;
    pbxId: number;
    
    
    


      constructor(companyId?: number, name?: string,  alphaName?: string,  dids?: string[],  locked?: boolean,  address?: Address, pbxId?: number){
      		this.companyId = companyId;
        	this.name = name;
          this.alphaName = alphaName;
        	this.dids = dids;
          this.locked = locked;
          this.address = address;
          this.pbxId = pbxId;
          
          
      }


      
}
