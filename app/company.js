"use strict";
var Company = (function () {
    function Company(id, name, alphaname, didNumber, email, locked, dids, credit, subscription, admin, billing, users, couponCode, trialDays) {
        this.id = id;
        this.name = name;
        this.alphaname = alphaname;
        this.didNumber = didNumber;
        this.email = email;
        this.locked = locked;
        this.dids = dids;
        this.credit = credit;
        this.subscription = subscription;
        this.admin = admin;
        this.billing = billing;
        this.users = users;
        this.couponCode = couponCode;
        this.trialDays = trialDays;
    }
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=company.js.map