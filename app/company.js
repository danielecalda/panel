"use strict";
var Company = (function () {
    function Company(companyId, name, alphaName, dids, locked, address, pbxId) {
        this.companyId = companyId;
        this.name = name;
        this.alphaName = alphaName;
        this.dids = dids;
        this.locked = locked;
        this.address = address;
        this.pbxId = pbxId;
    }
    return Company;
}());
exports.Company = Company;
//# sourceMappingURL=company.js.map