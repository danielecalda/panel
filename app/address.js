"use strict";
var Address = (function () {
    function Address(addressId, city, province, street, zip) {
        this.addressId = addressId,
            this.city = city;
        this.province = province;
        this.zip = zip;
        this.street = street;
    }
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.js.map