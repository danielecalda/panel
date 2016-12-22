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
var login_service_1 = require('./login.service');
var account_1 = require('./account');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.title = 'GodPanel';
        this.account = new account_1.Account();
    }
    AppComponent.prototype.doLogin = function () {
        if (this.loginService.login(this.account.username, this.account.password)) {
            this.loginService.isAuthenticated = true;
        }
    };
    AppComponent.prototype.doLogout = function () {
        this.loginService.isAuthenticated = false;
        window.location.href = '/';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', account_1.Account)
    ], AppComponent.prototype, "account", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map