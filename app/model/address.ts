export class Address{

      addressId: number;
      city: string;
      state: string;
      zip: string;
      street: string;


      constructor(addressId?: number, city?: string, state?: string,  street?: string, zip?: string) {

        this.addressId = addressId,
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.street = street;

    }
}
