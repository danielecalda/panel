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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var cookies_service_1 = require('angular2-cookie/services/cookies.service');
require('./rxjs-extensions');
var app_component_1 = require('./components/app.component');
var company_search_component_1 = require('./components/company-search.component');
var company_detail_component_1 = require('./components/company-detail.component');
var new_company_component_1 = require('./components/new-company.component');
var company_service_1 = require('./services/company.service');
var device_service_1 = require('./services/device.service');
var user_service_1 = require('./services/user.service');
var auth_service_1 = require('./services/auth.service');
var account_service_1 = require("./services/account.service");
var did_service_1 = require('./services/did.service');
var error_service_1 = require('./services/error.service');
var httpClient_1 = require('./services/httpClient');
var companies_pipe_1 = require('./pipes/companies.pipe');
var users_pipe_1 = require('./pipes/users.pipe');
var devices_pipe_1 = require('./pipes/devices.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/', pathMatch: 'full' },
                    { path: 'search', component: company_search_component_1.CompanySearchComponent },
                    { path: 'detail/:id', component: company_detail_component_1.CompanyDetailComponent },
                    { path: 'new', component: new_company_component_1.NewCompanyComponent }
                ], { useHash: true }),
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                company_search_component_1.CompanySearchComponent,
                company_detail_component_1.CompanyDetailComponent,
                new_company_component_1.NewCompanyComponent,
                companies_pipe_1.FilterCompaniesPipe,
                users_pipe_1.FilterUsersPipe,
                devices_pipe_1.FilterDevicesPipe
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [auth_service_1.AuthService, account_service_1.AccountService, company_service_1.CompanyService, device_service_1.DeviceService, user_service_1.UserService, httpClient_1.HttpClient, did_service_1.DidService, cookies_service_1.CookieService, error_service_1.ErrorService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map