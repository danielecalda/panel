export class CompanySearch{
	
	companyId: number;
	alphaname: string;
	name: string;
	email: string;
	didNumber: string;
	dids: string[];
	balance: number;
	locked: boolean;
	username: string;
	password1: string;


	constructor(companyId?: number, alphaname?: string, name?: string, email?: string, didNumber?: string, dids?: string[], balance?: number){
		this.companyId = companyId;
		this.alphaname = alphaname;
		this.name = name;
		this.didNumber = didNumber;
		this.dids = dids;
		this.balance = balance;
		this.locked = true;
	}
}