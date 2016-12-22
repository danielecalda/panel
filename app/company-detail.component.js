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
var company_service_1 = require('./company.service');
var device_service_1 = require('./device.service');
var user_service_1 = require('./user.service');
var company_1 = require('./company');
var device_1 = require('./device');
var user_1 = require('./user');
var did_1 = require('./did');
var CompanyDetailComponent = (function () {
    function CompanyDetailComponent(companyService, deviceService, userService, route, location) {
        this.companyService = companyService;
        this.deviceService = deviceService;
        this.userService = userService;
        this.route = route;
        this.location = location;
        this.editMode = true;
        this.filter = '';
        this.typeDeviceFilter = 'all';
        this.users = [];
        this.device = new device_1.Device();
        this.currentUser = new user_1.User();
        this.newUser = new user_1.User();
        this.newDevice = new device_1.Device();
    }
    CompanyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.companyService.getCompany(id)
                .subscribe(function (data) {
                _this.company = data;
                _this.users = data.users;
            }, function (error) {
                alert(error);
            });
        });
    };
    CompanyDetailComponent.prototype.save = function () {
        this.companyService.update(this.company)
            .subscribe(function () {
        }, function (error) {
            alert(error);
        });
        this.editMode = !this.editMode;
    };
    CompanyDetailComponent.prototype.triggerEditMode = function (index) {
        this.editMode = !this.editMode;
        this.index = index;
    };
    CompanyDetailComponent.prototype.unlock = function () {
        var lockIt = false;
        var r = confirm('Sei sicuro di voler SBLOCCARE la company con id ' + this.company.id + '?');
        if (r) {
            lockIt = true;
        }
        if (!lockIt)
            return;
        if (this.company.locked === true) {
            this.company.locked = false;
        }
        this.companyService.update(this.company)
            .subscribe(function () {
        }, function (error) {
            alert(error);
        });
    };
    CompanyDetailComponent.prototype.lock = function () {
        var lockIt = false;
        var r = confirm('Sei sicuro di voler BLOCCARE la company con id ' + this.company.id + '?');
        if (r) {
            lockIt = true;
        }
        if (!lockIt)
            return;
        if (this.company.locked === false) {
            this.company.locked = true;
        }
        this.companyService.update(this.company)
            .subscribe(function () {
        }, function (error) {
            alert(error);
        });
    };
    CompanyDetailComponent.prototype.addCredit = function (credit) {
        this.company.credit = this.company.credit + parseInt(credit);
        this.companyService.update(this.company)
            .subscribe(function () {
        }, function (error) {
            alert(error);
        });
        var form = document.getElementById("creditForm");
        form.reset();
    };
    CompanyDetailComponent.prototype.addDid = function (didNumber) {
        var did = new did_1.Did(didNumber);
        this.company.dids.push(did);
        this.companyService.update(this.company)
            .subscribe(function () {
        }, function (error) {
            alert(error);
        });
        var form = document.getElementById("didForm");
        form.reset();
    };
    CompanyDetailComponent.prototype.deleteMainDid = function () {
        this.company.didNumber = null;
        this.companyService.update(this.company)
            .subscribe(function () {
        }, function (error) {
            alert(error);
        });
    };
    CompanyDetailComponent.prototype.deleteDid = function (index) {
        this.company.dids.splice(index, 1);
        this.companyService.update(this.company)
            .subscribe(function () {
        }, function (error) {
            alert(error);
        });
    };
    CompanyDetailComponent.prototype.resetPwd = function (pwd, repeteadPwd) {
        var _this = this;
        var button = document.getElementById("buttonPwdModal");
        if (pwd === repeteadPwd) {
            this.currentUser.password = pwd;
            this.companyService.update(this.company)
                .subscribe(function () {
                _this.users = _this.company.users;
            }, function (error) {
                alert(error);
            });
            var form = document.getElementById("myForm");
            form.reset();
            this.msg = " ";
            this.password = null;
            button.setAttribute("data-dismiss", "modal");
        }
        else {
            button.removeAttribute("data-dismiss");
            this.msg = "le password non corrispondono";
        }
    };
    CompanyDetailComponent.prototype.generate = function () {
        this.password = this.companyService.randomPassword(8);
    };
    CompanyDetailComponent.prototype.setAllUsers = function () {
        this.filter = '';
    };
    CompanyDetailComponent.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
    };
    CompanyDetailComponent.prototype.setDeviceNull = function () {
        this.newDevice = new device_1.Device();
    };
    CompanyDetailComponent.prototype.addDevice = function () {
        var _this = this;
        this.deviceService.create(this.newDevice)
            .subscribe(function (data) {
            _this.deviceService.getDevices(_this.currentUser).subscribe(function (data) {
                _this.devices = data;
            }, function (error) { alert(error); });
        }, function (error) {
            alert(error);
        });
    };
    CompanyDetailComponent.prototype.openControlPanel = function () {
    };
    CompanyDetailComponent.prototype.addUser = function (password, repeatedPassword) {
        var _this = this;
        var button = document.getElementById("buttonUserModal");
        if (password === repeatedPassword) {
            this.newUser.password = password;
            this.company.users.push(this.newUser);
            this.companyService.update(this.company)
                .subscribe(function () {
                _this.users = _this.company.users;
            }, function (error) {
                alert(error);
            });
            button.setAttribute("data-dismiss", "modal");
        }
        else {
            button.removeAttribute("data-dismiss");
            this.msg = 'le password non corrispondono';
        }
        this.password = null;
        this.newUser = new user_1.User();
    };
    CompanyDetailComponent.prototype.searchDevicesForUsername = function (user) {
        var _this = this;
        this.deviceService.getDevices(user).subscribe(function (data) {
            _this.devices = data;
        }, function (error) {
            alert(error);
        });
        this.currentUser = user;
    };
    CompanyDetailComponent.prototype.setCurrentDevice = function (index) {
        this.index = index;
        this.device = this.devices[this.index];
    };
    CompanyDetailComponent.prototype.saveDevice = function () {
        var _this = this;
        var delIt = false;
        var r = confirm('Sei sicuro di voler salvare il device con id ' + this.device.id + '?');
        if (r) {
            var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
            if (r2) {
                delIt = true;
            }
        }
        if (!delIt) {
            return;
        }
        this.deviceService.update(this.device)
            .subscribe(function () {
        }, function (error) {
            _this.searchDevicesForUsername(_this.currentUser);
            alert(error);
        });
    };
    CompanyDetailComponent.prototype.deleteUser = function (index) {
        var _this = this;
        var delIt = false;
        var r = confirm('Sei sicuro di voler eliminare lo user con id ' + this.users[index].id + '?');
        if (r) {
            var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
            if (r2) {
                delIt = true;
            }
        }
        if (!delIt) {
            return;
        }
        if (this.users[index].userName === this.currentUser.userName) {
            this.devices = null;
        }
        this.company.users.splice(index, 1);
        this.companyService.update(this.company)
            .subscribe(function () {
            _this.users = _this.company.users;
        }, function (error) {
            alert(error);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', company_1.Company)
    ], CompanyDetailComponent.prototype, "company", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompanyDetailComponent.prototype, "filter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompanyDetailComponent.prototype, "device", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompanyDetailComponent.prototype, "newUser", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompanyDetailComponent.prototype, "newDevice", void 0);
    CompanyDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-company-detail',
            templateUrl: 'company-detail.component.html',
            styleUrls: ['company-detail.component.css']
        }), 
        __metadata('design:paramtypes', [company_service_1.CompanyService, device_service_1.DeviceService, user_service_1.UserService, router_1.ActivatedRoute, common_1.Location])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());
exports.CompanyDetailComponent = CompanyDetailComponent;
//# sourceMappingURL=company-detail.component.js.map