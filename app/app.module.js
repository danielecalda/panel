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
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
require('./rxjs-extensions');
var app_component_1 = require('./app.component');
var company_search_component_1 = require('./company-search.component');
var company_detail_component_1 = require('./company-detail.component');
var company_service_1 = require('./company.service');
var device_service_1 = require('./device.service');
var user_service_1 = require('./user.service');
var auth_service_1 = require('./auth.service');
var account_service_1 = require("./account.service");
var new_company_component_1 = require('./new-company.component');
var companies_pipe_1 = require('./companies.pipe');
var users_pipe_1 = require('./users.pipe');
var devices_pipe_1 = require('./devices.pipe');
var shared_service_1 = require('./shared.service');
var httpClient_1 = require('./httpClient');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/app', pathMatch: 'full' },
                    { path: 'search', component: company_search_component_1.CompanySearchComponent },
                    { path: 'detail/:id', component: company_detail_component_1.CompanyDetailComponent },
                    { path: 'new', component: new_company_component_1.NewCompanyComponent }
                ], { useHash: true }),
                http_1.HttpModule,
                forms_1.FormsModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
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
            providers: [auth_service_1.AuthService, account_service_1.AccountService, company_service_1.CompanyService, device_service_1.DeviceService, user_service_1.UserService, shared_service_1.SharedService, httpClient_1.HttpClient]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map