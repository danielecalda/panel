"use strict";
var CompanySearch = (function () {
    function CompanySearch(companyId, alphaname, name, email, didNumber, dids, balance) {
        this.companyId = companyId;
        this.alphaname = alphaname;
        this.name = name;
        this.didNumber = didNumber;
        this.dids = dids;
        this.balance = balance;
        this.locked = true;
    }
    return CompanySearch;
}());
exports.CompanySearch = CompanySearch;
//# sourceMappingURL=company-search.js.map