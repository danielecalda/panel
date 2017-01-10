"use strict";
/**
 * Created by manuel on 14/11/2016.
 */
var Account = (function () {
    function Account() {
    }
    Account.prototype.setAccount = function (user, pass, id) {
        this.username = user;
        this.password = pass;
        this.installId = id;
    };
    Account.prototype.setToken = function (token) {
        this.token = token;
    };
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.js.map