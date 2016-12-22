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
var company_service_1 = require('./company.service');
var router_1 = require('@angular/router');
var admin_1 = require('./admin');
var billing_details_1 = require('./billing-details');
var company_1 = require('./company');
var NewCompanyComponent = (function () {
    function NewCompanyComponent(router, companyService) {
        this.router = router;
        this.companyService = companyService;
        this.cities = ['roma', 'padova', 'milano', 'napoli', 'firenze', 'torino', 'palermo', 'cagliari', 'venezia'];
        this.states = ['italy', 'france', 'england', 'spain', 'portugal', 'unites states'];
        this.admin = new admin_1.Admin();
        this.company = new company_1.Company();
        this.billing = new billing_details_1.BillingDetails();
        this.creationCompleted = false;
    }
    NewCompanyComponent.prototype.add = function () {
        var _this = this;
        var r = confirm('Sei sicuro di voler INSERIRE la nuova company?');
        if (r) {
            if (this.admin.password !== this.repeatedPwd) {
                this.msg = 'le password non corrispondono';
            }
            else {
                this.company.alphaname = this.company.name.replace(/ /g, "").toLowerCase();
                this.company.admin = this.admin;
                this.company.dids = [];
                //default unlocked
                this.company.locked = true;
                this.company.billing = this.billing;
                this.company.users = [];
                this.companyService.create(this.company)
                    .subscribe(function (data) {
                    console.log('yes');
                    _this.creationCompleted = true;
                }, function (error) {
                    alert(error);
                });
            }
        }
    };
    NewCompanyComponent.prototype.goToSearch = function () {
        this.router.navigateByUrl('/search');
    };
    NewCompanyComponent.prototype.generate = function () {
        this.admin.password = this.companyService.randomPassword(8);
        this.repeatedPwd = this.admin.password;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NewCompanyComponent.prototype, "admin", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NewCompanyComponent.prototype, "company", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NewCompanyComponent.prototype, "billing", void 0);
    NewCompanyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-new-company',
            templateUrl: 'new-company.component.html',
            styleUrls: ['new-company.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, company_service_1.CompanyService])
    ], NewCompanyComponent);
    return NewCompanyComponent;
}());
exports.NewCompanyComponent = NewCompanyComponent;
//# sourceMappingURL=new-company.component.js.map