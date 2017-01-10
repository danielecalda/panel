"use strict";
var User = (function () {
    function User(userId, firstName, lastName, email, phoneNumber, enabled, isAdministrator, extension) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.enabled = enabled;
        this.isAdministrator = isAdministrator;
        this.extension = extension;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map