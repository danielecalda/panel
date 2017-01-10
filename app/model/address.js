"use strict";
var Address = (function () {
    function Address(addressId, city, state, street, zip) {
        this.addressId = addressId,
            this.city = city;
        this.state = state;
        this.zip = zip;
        this.street = street;
    }
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.js.map