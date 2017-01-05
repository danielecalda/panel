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
var company_service_1 = require('./services/company.service');
var router_1 = require('@angular/router');
var onboarding_1 = require('./onboarding');
var error_service_1 = require('./services/error.service');
var NewCompanyComponent = (function () {
    function NewCompanyComponent(router, companyService, errorService) {
        this.router = router;
        this.companyService = companyService;
        this.errorService = errorService;
        this.cities = ['roma', 'padova', 'milano', 'napoli', 'firenze', 'torino', 'palermo', 'cagliari', 'venezia'];
        this.states = ['italy', 'france', 'england', 'spain', 'portugal', 'unites states'];
        this.onBoarding = new onboarding_1.OnBoarding();
    }
    NewCompanyComponent.prototype.add = function () {
        var _this = this;
        var r = confirm('Sei sicuro di voler INSERIRE la nuova company?');
        if (r) {
            if (this.onBoarding.password !== this.repeatedPwd) {
                this.msg = 'le password non corrispondono';
            }
            else {
                $('#myModalCharge').modal('show');
                this.companyService.create(this.onBoarding)
                    .subscribe(function (data) {
                    $('#myModalCharge').modal('hide');
                    console.log('yes');
                    _this.router.navigate(['/search']);
                }, function (error) {
                    $('#myModalCharge').modal('hide');
                    _this.errorService.errorPopUp(error._body, error.status);
                    console.log(error);
                });
            }
        }
    };
    NewCompanyComponent.prototype.goToSearch = function () {
        this.router.navigateByUrl('/search');
    };
    NewCompanyComponent.prototype.generate = function () {
        this.onBoarding.password = this.companyService.randomPassword(8);
        this.repeatedPwd = this.onBoarding.password;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', onboarding_1.OnBoarding)
    ], NewCompanyComponent.prototype, "onBoarding", void 0);
    NewCompanyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-new-company',
            templateUrl: 'new-company.component.html',
            styleUrls: ['new-company.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, company_service_1.CompanyService, error_service_1.ErrorService])
    ], NewCompanyComponent);
    return NewCompanyComponent;
}());
exports.NewCompanyComponent = NewCompanyComponent;
//# sourceMappingURL=new-company.component.js.map