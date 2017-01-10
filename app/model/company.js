"use strict";
var Company = (function () {
    function Company(companyId, name, alphaname, dids, locked, address, pbxId, chargebeeId) {
        this.companyId = companyId;
        this.name = name;
        this.alphaname = alphaname;
        this.dids = dids;
        this.locked = locked;
        this.address = address;
        this.pbxId = pbxId;
        this.chargebeeId = chargebeeId;
    }
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=company.js.map