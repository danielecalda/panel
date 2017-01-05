export class OnBoarding{
	
	first_name: string;
	last_name: string;
	tax_id: string;
	company_name: string;
	mobile_number: string;
	email: string;
	password: string;
	address: string;
	city: string;
	state: string;
	zip: string;
	prefix: string;
	trial_days: number;
	balance: number;


	constructor(first_name?: string, last_name?: string, tax_id?: string, company_name?: string, mobile_number?: string, email?: string, password?: string, address?: string, city?: string, state?: string, zip?: string, prefix?: string, trial_days?: number, balance?: number){
		this.first_name = first_name;
		this.last_name = last_name;
		this.tax_id = tax_id;
		this.company_name = company_name;
		this.mobile_number = mobile_number;
		this.email = email;
		this.password = password;
		this.address = address;
		this.city = city;
		this.zip = zip;
		this.prefix = prefix;
		this.trial_days = trial_days;
		this.balance = balance;
	}
}