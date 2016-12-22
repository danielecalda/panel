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
var common_1 = require('@angular/common');
var shared_service_1 = require('./shared.service');
require('rxjs/add/operator/toPromise');
var httpClient_1 = require('./httpClient');
var CompanyService = (function () {
    function CompanyService(http, location, ss) {
        this.http = http;
        this.location = location;
        this.ss = ss;
    }
    CompanyService.prototype.ngOnInit = function () { };
    /*
    getCompany(id: number): Promise<Company> {
    return this.getCompanies()
               .then(companies => companies.find(company => company.id === id));
    }
    */
    CompanyService.prototype.getCompany = function (id) {
        return this.http.get(this.ss.companyUrl + "/" + id)
            .map(function (response) { return response.json().data; });
    };
    /*
    getCompanies(): Promise<Company[]> {
    return this.http.get(this.ss.companyUrl)
           .toPromise()
           .then(response => response.json().data as Company[])
           .catch(this.handleError);
    
    
    }
    */
    CompanyService.prototype.getCompanies = function () {
        return this.http.get(this.ss.companyUrl)
            .map(function (response) { return response.json().data; });
    };
    CompanyService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        alert(error);
        this.location.back();
        return Promise.reject(error.message || error);
    };
    /*
    update(company: Company): Promise<Company> {
      const url = `${this.ss.companyUrl}/${company.id}`;
      return this.http
        .put(url, JSON.stringify(company), {headers: this.headers})
        .toPromise()
        .then(() => company)
        .catch(this.handleError);
    }
    */
    CompanyService.prototype.update = function (company) {
        var url = this.ss.companyUrl + "/" + company.id;
        return this.http
            .put(url, JSON.stringify(company))
            .map(function (response) { return response.json(); });
    };
    /*
    delete(company: Company): boolean{
      var delIt = false;
        var r = confirm('Sei sicuro di voler eliminare la company con id ' + company.id + '?');
          if (r) {
            console.log('true');
            var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
            if (r2) {
            console.log('true');
              delIt = true;
            }
    
      }
      if (!delIt){
                  console.log('return');
    
                return false;
                }
                
                  console.log('deleted');
    
      const url = `${this.ss.companyUrl}/${company.id}`;
      this.http.delete(url).catch(this.handleError);
      return true;
      
    }
    */
    CompanyService.prototype.delete = function (company) {
        var delIt = false;
        var r = confirm('Sei sicuro di voler eliminare la company con id ' + company.id + '?');
        if (r) {
            console.log('true');
            var r2 = confirm('SEI PROPRIO PROPRIO SICURO???');
            if (r2) {
                console.log('true');
                delIt = true;
            }
        }
        if (!delIt) {
            console.log('return');
            return false;
        }
        console.log('deleted');
        var url = this.ss.companyUrl + "/" + company.id;
        this.http.delete(url);
        return true;
    };
    /*
    create(company: Company): Promise<Company> {
      return this.http
        .post(this.ss.companyUrl, JSON.stringify(company))
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
    */
    CompanyService.prototype.create = function (company) {
        return this.http
            .post(this.ss.companyUrl, JSON.stringify(company))
            .map(function (res) { return res.json().data; });
    };
    CompanyService.prototype.randomPassword = function (length) {
        var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
        var pass = "";
        for (var x = 0; x < length; x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;
    };
    CompanyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpClient_1.HttpClient, common_1.Location, shared_service_1.SharedService])
    ], CompanyService);
    return CompanyService;
}());
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map