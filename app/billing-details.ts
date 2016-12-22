export class BillingDetails{

      address: string;
      city: string;
      province: string;
      zipCode: string;
      state: string;


      constructor(address?: string, city?: string, province?: string, zipCode?: string, state?: string) {

        this.address = address,
        this.city = city;
        this.province = province;
        this.zipCode = zipCode;
        this.state = state;

    }
}
