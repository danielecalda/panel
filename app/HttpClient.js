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
var auth_service_1 = require('./services/auth.service');
var account_service_1 = require('./services/account.service');
var HttpClient = (function () {
    function HttpClient(http, authService, currentAccount) {
        this.http = http;
        this.authService = authService;
        this.currentAccount = currentAccount;
    }
    HttpClient.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.currentAccount.current.token);
    };
    HttpClient.prototype.get = function (url, options) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        console.log(headers.toJSON());
        return this.http.get(url, {
            headers: headers
        });
    };
    HttpClient.prototype.post = function (url, data) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        console.log(headers.toJSON());
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpClient.prototype.put = function (url, data) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        console.log(headers.toJSON());
        return this.http.put(url, data, {
            headers: headers
        });
    };
    HttpClient.prototype.delete = function (url) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        console.log(headers.toJSON());
        return this.http.delete(url, {
            headers: headers
        });
    };
    HttpClient = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService, account_service_1.AccountService])
    ], HttpClient);
    return HttpClient;
}());
exports.HttpClient = HttpClient;
//# sourceMappingURL=httpClient.js.map