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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var httpClient_1 = require('../httpClient');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'app/user'; // URL to web api
    }
    UserService.prototype.getUsersForCompany = function (id) {
        var headers = new http_1.Headers();
        headers.append('companyId', String(id));
        return this.http.get("https://devapi.voverc.com/api/v2/companies/" + id + "/users")
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getUsersForName = function (name) {
        return this.http.get("app/user?userName=" + name)
            .map(function (response) { return response.json().data; });
    };
    UserService.prototype.create = function (companyId, user) {
        return this.http
            .post("https://devapi.voverc.com/api/v2/companies/" + companyId + "/users", JSON.stringify(user))
            .map(function (res) { return res.json().data; });
    };
    UserService.prototype.update = function (user) {
        var url = this.userUrl + "/" + user.userId;
        return this.http
            .put(url, JSON.stringify(user))
            .map(function () { return user; });
    };
    UserService.prototype.delete = function (company, user) {
        var url = "https://devapi.voverc.com/api/v2/companies/" + company.companyId + "/users/" + user.userId;
        return this.http.delete(url)
            .map(function (res) { return res.json().data; });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpClient_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map