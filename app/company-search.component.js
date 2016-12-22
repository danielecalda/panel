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
var company_service_1 = require('./company.service');
var CompanySearchComponent = (function () {
    function CompanySearchComponent(companyService, router) {
        this.companyService = companyService;
        this.router = router;
        this.companies = [];
    }
    // Push a search term into the observable stream.
    CompanySearchComponent.prototype.ngOnInit = function () {
    };
    CompanySearchComponent.prototype.listCompanies = function () {
        var _this = this;
        this.companyService.getCompanies()
            .subscribe(function (data) {
            _this.companies = data;
        }, function (error) {
            alert(error);
        });
    };
    CompanySearchComponent.prototype.goToDetail = function (company) {
        var link = ['/detail', company.id];
        this.router.navigate(link);
    };
    CompanySearchComponent.prototype.deleteCompany = function (company, index) {
        var _this = this;
        if (this.companyService.delete(company)) {
            this.companyService.getCompanies()
                .subscribe(function (data) {
                _this.companies = data;
            }, function (error) {
                alert(error);
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompanySearchComponent.prototype, "filter", void 0);
    CompanySearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'company-search',
            templateUrl: 'company-search.component.html',
            styleUrls: ['company-search.component.css']
        }), 
        __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.Router])
    ], CompanySearchComponent);
    return CompanySearchComponent;
}());
exports.CompanySearchComponent = CompanySearchComponent;
//# sourceMappingURL=company-search.component.js.map