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
var FilterCompaniesPipe = (function () {
    function FilterCompaniesPipe() {
    }
    FilterCompaniesPipe.prototype.transform = function (value, filter) {
        var companies = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var company = value_1[_i];
            if (company.name.includes(filter) || company.email.includes(filter) || company.alphaname.includes(filter) || this.checkDid(company, filter)) {
                companies.push(company);
            }
        }
        if (filter === '') {
            companies = null;
        }
        if (filter === 'all') {
            companies = value;
        }
        return companies;
    };
    FilterCompaniesPipe.prototype.checkDid = function (company, filter) {
        var exist = false;
        for (var _i = 0, _a = company.dids; _i < _a.length; _i++) {
            var did = _a[_i];
            if (did.includes(filter)) {
                exist = true;
            }
        }
        return exist;
    };
    FilterCompaniesPipe = __decorate([
        core_1.Pipe({ name: 'filterCompanies' }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FilterCompaniesPipe);
    return FilterCompaniesPipe;
}());
exports.FilterCompaniesPipe = FilterCompaniesPipe;
//# sourceMappingURL=companies.pipe.js.map