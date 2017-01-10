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
var error_service_1 = require('../services/error.service');
var company_service_1 = require('../services/company.service');
var CompanySearchComponent = (function () {
    function CompanySearchComponent(companyService, router, errorService) {
        this.companyService = companyService;
        this.router = router;
        this.errorService = errorService;
        this.companies = [];
    }
    // Push a search term into the observable stream.
    CompanySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#myModalCharge').modal('show');
        this.companyService.getCompanies()
            .subscribe(function (data) {
            _this.companies = data;
            $('#myModalCharge').modal('hide');
        }, function (error) {
            $('#myModalCharge').modal('hide');
            _this.errorService.errorPopUp(error._body, error.status);
        });
    };
    CompanySearchComponent.prototype.refresh = function () {
        var _this = this;
        $('#myModalCharge').modal('show');
        this.companyService.getCompanies()
            .subscribe(function (data) {
            _this.companies = data;
            $('#myModalCharge').modal('hide');
        }, function (error) {
            $('#myModalCharge').modal('hide');
            _this.errorService.errorPopUp(error._body, error.status);
        });
    };
    CompanySearchComponent.prototype.listAllCompanies = function () {
        this.filter = "all";
    };
    CompanySearchComponent.prototype.openControlPanel = function (company) {
        var win = window.open('https://dev-controlpanel.voverc.com/' + '#/access/signin?admin=true&us=' + company.username + '&pw=' + company.password1, '_blank');
        win.focus();
    };
    CompanySearchComponent.prototype.goToDetail = function (company) {
        var link = ['/detail', company.companyId];
        this.router.navigate(link);
    };
    CompanySearchComponent.prototype.deleteCompany = function (company) {
        var _this = this;
        var delIt = false;
        var r = confirm('Sei sicuro di voler eliminare la company con id ' + company.companyId + '?');
        if (r) {
            console.log('true');
            var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
            if (r2) {
                console.log('true');
                delIt = true;
            }
        }
        if (!delIt) {
            return;
        }
        $('#myModalCharge').modal('show');
        this.companyService.delete(company)
            .subscribe(function () {
            _this.companyService.getCompanies()
                .subscribe(function (data) {
                _this.companies = data;
                $('#myModalCharge').modal('hide');
            }, function (error) {
                _this.errorService.errorPopUp(error._body, error.status);
                $('#myModalCharge').modal('hide');
            });
            _this.filter = "";
        }, function (error) {
            _this.errorService.errorPopUp(error._body, error.status);
            $('#myModalCharge').modal('hide');
        });
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
        __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.Router, error_service_1.ErrorService])
    ], CompanySearchComponent);
    return CompanySearchComponent;
}());
exports.CompanySearchComponent = CompanySearchComponent;
//# sourceMappingURL=company-search.component.js.map