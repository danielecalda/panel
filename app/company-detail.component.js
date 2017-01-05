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
var company_service_1 = require('./services/company.service');
var device_service_1 = require('./services/device.service');
var user_service_1 = require('./services/user.service');
var did_service_1 = require('./services/did.service');
var error_service_1 = require('./services/error.service');
var company_1 = require('./company');
var device_1 = require('./device');
var user_1 = require('./user');
var CompanyDetailComponent = (function () {
    function CompanyDetailComponent(companyService, deviceService, userService, didService, route, location, errorService) {
        this.companyService = companyService;
        this.deviceService = deviceService;
        this.userService = userService;
        this.didService = didService;
        this.route = route;
        this.location = location;
        this.errorService = errorService;
        this.companies = [];
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
                _this.didService.getDids(data.pbxId)
                    .subscribe(function (data) {
                    _this.dids = data;
                }, function (error) {
                    _this.errorService.errorPopUp(error._body, error.status);
                });
                _this.userService.getUsersForCompany(id)
                    .subscribe(function (data) {
                    _this.users = data;
                }, function (error) {
                    _this.errorService.errorPopUp(error._body, error.status);
                });
            }, function (error) {
                _this.errorService.errorPopUp(error._body, error.status);
            });
        });
    };
    CompanyDetailComponent.prototype.save = function () {
        var _this = this;
        this.companyService.update(this.company)
            .subscribe(function () {
        }, function (error) {
            _this.errorService.errorPopUp(error._body, error.status);
        });
        this.editMode = !this.editMode;
    };
    CompanyDetailComponent.prototype.triggerEditMode = function (index) {
        this.editMode = !this.editMode;
        this.index = index;
    };
    CompanyDetailComponent.prototype.unlock = function () {
        var _this = this;
        var lockIt = false;
        var r = confirm('Sei sicuro di voler SBLOCCARE la company con id ' + this.company.companyId + '?');
        if (r) {
            lockIt = true;
        }
        if (!lockIt)
            return;
        this.companyService.unlockAccount(this.company)
            .subscribe(function (data) {
            _this.company.locked = false;
        }, function (error) {
            _this.errorService.errorPopUp(error._body, error.status);
        });
    };
    CompanyDetailComponent.prototype.lock = function () {
        var _this = this;
        var lockIt = false;
        var r = confirm('Sei sicuro di voler BLOCCARE la company con id ' + this.company.companyId + '?');
        if (r) {
            lockIt = true;
        }
        if (!lockIt)
            return;
        this.companyService.lockAccount(this.company)
            .subscribe(function (data) {
            _this.company.locked = true;
        }, function (error) {
            _this.errorService.errorPopUp(error._body, error.status);
        });
    };
    /*
    addCredit(balance: string){
      this.company.balance = this.company.balance + parseInt(balance);
      this.companyService.update(this.company)
          .subscribe(
            () => {
              
              },
            error => {
              this.errorService.errorPopUp(error._body, error.status);
            });
      var form = <HTMLFormElement>document.getElementById("creditForm");
      form.reset();
      }
  
      */
    CompanyDetailComponent.prototype.addDid = function (didNumber) {
        var _this = this;
        this.company.dids.push(didNumber);
        this.companyService.update(this.company)
            .subscribe(function () {
        }, function (error) {
            _this.errorService.errorPopUp(error._body, error.status);
        });
        var form = document.getElementById("didForm");
        form.reset();
    };
    CompanyDetailComponent.prototype.deleteDid = function (index) {
        var _this = this;
        this.company.dids.splice(index, 1);
        this.companyService.update(this.company)
            .subscribe(function () {
        }, function (error) {
            _this.errorService.errorPopUp(error._body, error.status);
        });
    };
    CompanyDetailComponent.prototype.saveDid = function (did) {
        var _this = this;
        this.didService.update(this.company.pbxId, did.id, did)
            .subscribe(function () {
        }, function (error) {
            _this.errorService.errorPopUp(error._body, error.status);
        });
        this.editMode = !this.editMode;
    };
    /*
    resetPwd(pwd: string, repeteadPwd: string){
      var button = <HTMLButtonElement>document.getElementById("buttonPwdModal");
  
      if(pwd === repeteadPwd ){
  
        this.currentUser.password = pwd;
        this.companyService.update(this.company)
          .subscribe(
              () => {
                  this.users = this.company.users;
              },
              error => {
                  this.errorService.errorPopUp(error._body, error.status);
              });
        var form = <HTMLFormElement>document.getElementById("myForm");
  
        form.reset();
        this.msg = " ";
        this.password = null;
  
        button.setAttribute("data-dismiss", "modal");
        }
      else{
        button.removeAttribute("data-dismiss");
        this.msg = "le password non corrispondono";
        }
    }
    */
    CompanyDetailComponent.prototype.generate = function () {
        this.password = this.companyService.randomPassword(8);
    };
    CompanyDetailComponent.prototype.setAllUsers = function () {
        this.filter = '';
    };
    /*

  setCurrentUser(user: User){
    this.currentUser = user;
  }


  setDeviceNull(){
    this.newDevice = new Device();
  }


  addDevice(){
    
    this.deviceService.create(this.newDevice)
      .subscribe(
          data => {
            
              this.deviceService.getDevices(this.currentUser).subscribe(
                data => { this.devices = data;

                  },
              error => {
              this.errorService.errorPopUp(error._body, error.status);
              });
              },
              error => {
                this.errorService.errorPopUp(error._body, error.status);
              });
          }
          

  openControlPanel(){
        var win = window.open('https://dev-controlpanel.voverc.com/' + '#/access/signin?admin=true&us=' + this.company.username + '&pw=' + this.company.password1, '_blank');
        win.focus();
     }
     */
    CompanyDetailComponent.prototype.addUser = function () {
        var _this = this;
        var button = document.getElementById("buttonUserModal");
        this.userService.create(this.company.companyId, this.newUser)
            .subscribe(function () {
            _this.userService.getUsersForCompany(_this.company.companyId)
                .subscribe(function (data) {
                _this.users = data;
            }, function (error) {
                _this.errorService.errorPopUp(error._body, error.status);
            });
        }, function (error) {
            _this.errorService.errorPopUp(error._body, error.status);
        });
        button.setAttribute("data-dismiss", "modal");
        this.newUser = new user_1.User();
    };
    CompanyDetailComponent.prototype.searchDevicesForUsername = function (user) {
        var _this = this;
        this.deviceService.getDevices(this.company.companyId, user.userId).subscribe(function (data) {
        }, function (error) {
            _this.errorService.errorPopUp(error._body, error.status);
        });
        this.devices = this.users[0].devices;
        this.currentUser = user;
    };
    /*
  
    setCurrentDevice(index: number){
        this.index = index;
        this.device = this.devices[this.index];
    }
  
    saveDevice(){
      var delIt = false;
      var r = confirm('Sei sicuro di voler salvare il device con id ' +  this.device.id + '?');
        if (r) {
          var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
          if (r2) {
            delIt = true;
          }
      }
      if (!delIt){
      return;
      }
        this.deviceService.update(this.device)
        .subscribe(
            () => {
                
            },
            error => {
              this.searchDevicesForUsername(this.currentUser);
              this.errorService.errorPopUp(error._body, error.status);
              });
    }
  
  
  
     
    */
    CompanyDetailComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var delIt = false;
        var r = confirm('Sei sicuro di voler eliminare lo user con id ' + user.userId + '?');
        if (r) {
            var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
            if (r2) {
                delIt = true;
            }
        }
        if (!delIt) {
            return;
        }
        this.userService.delete(this.company, user)
            .subscribe(function () {
            _this.userService.getUsersForCompany(_this.company.companyId)
                .subscribe(function (data) {
                _this.users = data;
            }, function (error) {
                _this.errorService.errorPopUp(error._body, error.status);
                console.log(error._body);
            });
        }, function (error) {
            _this.errorService.errorPopUp(error._body, error.status);
            console.log(error._body);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', company_1.Company)
    ], CompanyDetailComponent.prototype, "company", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CompanyDetailComponent.prototype, "companies", void 0);
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
        __metadata('design:paramtypes', [company_service_1.CompanyService, device_service_1.DeviceService, user_service_1.UserService, did_service_1.DidService, router_1.ActivatedRoute, common_1.Location, error_service_1.ErrorService])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());
exports.CompanyDetailComponent = CompanyDetailComponent;
//# sourceMappingURL=company-detail.component.js.map