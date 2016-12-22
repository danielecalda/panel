"use strict";
var BillingDetails = (function () {
    function BillingDetails(address, city, province, zipCode, state) {
        this.address = address,
            this.city = city;
        this.province = province;
        this.zipCode = zipCode;
        this.state = state;
    }
    return BillingDetails;
}());
exports.BillingDetails = BillingDetails;
//# sourceMappingURL=billing-details.js.map