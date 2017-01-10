"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var FilterUsersPipe = (function () {
    function FilterUsersPipe() {
    }
    FilterUsersPipe.prototype.transform = function (value, filter) {
        var users = [];
        if (filter === '') {
            users = value;
        }
        else {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var user = value_1[_i];
                if (user.firstName.toLowerCase().includes(filter) || user.lastName.toLowerCase().includes(filter) || user.email.toLowerCase().includes(filter)) {
                    users.push(user);
                }
            }
        }
        return users;
    };
    FilterUsersPipe = __decorate([
        core_1.Pipe({ name: 'filterUsers' }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FilterUsersPipe);
    return FilterUsersPipe;
}());
exports.FilterUsersPipe = FilterUsersPipe;
//# sourceMappingURL=users.pipe.js.map