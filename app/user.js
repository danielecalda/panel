"use strict";
var User = (function () {
    function User(id, userName, email, phoneNumber, password, enabled, isAdministrator) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.enabled = enabled;
        this.isAdministrator = isAdministrator;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map