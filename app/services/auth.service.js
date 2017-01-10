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
var core_2 = require('angular2-cookie/core');
var account_service_1 = require('./account.service');
require('rxjs/add/operator/toPromise');
var AuthService = (function () {
    function AuthService(http, currentAccount, cookieService) {
        this.http = http;
        this.currentAccount = currentAccount;
        this.cookieService = cookieService;
        this.apiUrl = "https://devapi.voverc.com";
        this.tokenUrl = this.apiUrl + "/api/token";
        this.tokenHeaders = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.isAuthenticated = false;
        this.rememberMe = true;
    }
    AuthService.prototype.getAuthToken = function (username, password) {
        var _this = this;
        var postData = 'grant_type=password&username=' + username + ' &password=' + password;
        this.http
            .post('https://devapi.voverc.com/api/token', postData, { headers: this.tokenHeaders })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            $('#myModalCharge').modal('hide');
            _this.currentAccount.current.setToken(data.access_token);
            _this.isAuthenticated = true;
            if (_this.rememberMe) {
                var expireDate = new Date(new Date().getTime() + (1000 * data.expires_in));
                _this.cookieService.put("authToken", data.access_token, { expires: expireDate });
            }
        }, function (error) {
            alert("bad username or password");
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, account_service_1.AccountService, core_2.CookieService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map