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
var shared_service_1 = require('./shared.service');
var LoginService = (function () {
    function LoginService(http, ss) {
        this.http = http;
        this.ss = ss;
        this.isAuthenticated = false;
        this.authToken = 'token';
        this.accountUrl = 'app/account'; // URL to web api
    }
    LoginService.prototype.ngOnInit = function () {
    };
    LoginService.prototype.checkPassword = function (password, repeatedPassword) {
        if (password === repeatedPassword) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginService.prototype.loginSimple = function (username, password) {
        if (username === 'pippo' && password === 'voverc') {
            console.log('yes');
            return true;
        }
        else {
            alert('bad username or password');
            return false;
        }
    };
    /*
    login(account: Account){
        var postData = 'grant_type=password&username=' + account.username + '&password=' + account.password;
          this.http.post(apiUrl + 'api/token', postData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .subscribe(
              data => {
                this.ss.authToken = data.access_token;
                this.ss.isAuthenticated = true;
                },
              error => {
                  alert('bad username or password');
                });
    }
    */
    LoginService.prototype.login = function (username, password) {
        if (username === 'pippo' && password === 'voverc') {
            console.log('log in effettuato');
            return true;
        }
        else {
            console.log('bad username or password');
            alert('bad username or password');
            return false;
        }
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, shared_service_1.SharedService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map