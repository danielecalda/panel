"use strict";
var OnBoarding = (function () {
    function OnBoarding(first_name, last_name, tax_id, company_name, mobile_number, email, password, address, city, state, zip, prefix, trial_days, balance) {
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
    return OnBoarding;
}());
exports.OnBoarding = OnBoarding;
//# sourceMappingURL=onboarding.js.map