export class Address{

      addressId: number;
      city: string;
      province: string;
      zip: string;
      street: string;


      constructor(addressId?: number, city?: string, province?: string,  street?: string, zip?: string) {

        this.addressId = addressId,
        this.city = city;
        this.province = province;
        this.zip = zip;
        this.street = street;

    }
}
