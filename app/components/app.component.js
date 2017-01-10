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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var core_2 = require('angular2-cookie/core');
var auth_service_1 = require('../services/auth.service');
var account_service_1 = require('../services/account.service');
var error_service_1 = require('../services/error.service');
var AppComponent = (function () {
    function AppComponent(authService, router, cookieService, currentAccount, location, errorService) {
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
        this.currentAccount = currentAccount;
        this.location = location;
        this.errorService = errorService;
        this.title = 'GodPanel';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.cookieService.get("authToken") !== undefined) {
            this.authService.isAuthenticated = true;
            this.currentAccount.current.token = this.cookieService.get("authToken");
        }
    };
    AppComponent.prototype.removeCookie = function (key) {
        return this.cookieService.remove(key);
    };
    AppComponent.prototype.doLogin = function (username, password) {
        $('#myModalCharge').modal('show');
        this.authService.getAuthToken(username, password);
    };
    AppComponent.prototype.doLogout = function () {
        this.removeCookie("authToken");
        this.authService.isAuthenticated = false;
        window.location.href = '/';
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, core_2.CookieService, account_service_1.AccountService, common_1.Location, error_service_1.ErrorService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map