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
var common_1 = require('@angular/common');
require('rxjs/add/operator/toPromise');
var httpClient_1 = require('./httpClient');
var CompanyService = (function () {
    function CompanyService(http, location) {
        this.http = http;
        this.location = location;
    }
    CompanyService.prototype.ngOnInit = function () { };
    CompanyService.prototype.getCompany = function (id) {
        return this.http.get("https://devapi.voverc.com/api/v2/companies/" + id)
            .map(this.extractData);
    };
    CompanyService.prototype.getCompanies = function () {
        return this.http.get("https://devapi.voverc.com/api/company")
            .map(this.extractData);
    };
    CompanyService.prototype.update = function (company) {
        var url = "https://devapi.voverc.com/api/company/" + company.companyId;
        return this.http
            .put(url, JSON.stringify(company))
            .map(this.extractData);
    };
    CompanyService.prototype.delete = function (company) {
        var url = "https://devapi.voverc.com/api/v2/companies/" + company.companyId;
        return this.http.delete(url)
            .map(this.extractData);
    };
    CompanyService.prototype.create = function (onBoarding) {
        console.log(JSON.stringify(onBoarding));
        return this.http
            .post("https://devapi.voverc.com/api/v2/onboarding/trial", JSON.stringify(onBoarding))
            .map(this.extractData);
    };
    CompanyService.prototype.extractData = function (res) {
        var body;
        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    };
    CompanyService.prototype.randomPassword = function (length) {
        var chars = "abcdefghijklmnopqrstuvwxyz!@#$%&()ABCDEFGHIJKLMNOP1234567890";
        var pass = "";
        for (var x = 0; x < length; x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;
    };
    CompanyService.prototype.unlockAccount = function (company) {
        return this.http.put("https://devapi.voverc.com/api/unlockaccount/" + company.companyId, null)
            .map(function (response) { return response.json(); });
    };
    CompanyService.prototype.lockAccount = function (company) {
        return this.http.get("https://devapi.voverc.com/api/lockaccount/" + company.companyId)
            .map(function (response) { return response.json(); });
    };
    CompanyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpClient_1.HttpClient, common_1.Location])
    ], CompanyService);
    return CompanyService;
}());
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map