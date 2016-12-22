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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var shared_service_1 = require('./shared.service');
var httpClient_1 = require('./httpClient');
var DeviceService = (function () {
    function DeviceService(http, ss) {
        this.http = http;
        this.ss = ss;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DeviceService.prototype.getDevice = function (id) {
        return this.http.get(this.ss.deviceUrl + "/" + id)
            .map(function (response) { return response.json().data; });
    };
    /*
    getDevices(user: User): Promise<Device[]> {
    return this.http.get(`${this.ss.deviceUrl}?username=${user.username}`)
           .toPromise()
           .then(response => response.json().data as Device[])
           .catch(this.handleError);
    }
    */
    DeviceService.prototype.getDevices = function (user) {
        return this.http.get("app/device?username=" + user.userName)
            .map(function (response) { return response.json().data; });
    };
    DeviceService.prototype.update = function (device) {
        var url = this.ss.deviceUrl + "/" + device.id;
        return this.http
            .put(url, JSON.stringify(device))
            .map(function (response) { return response.json(); });
    };
    /*
    update(device: Device): Promise<Device> {
      const url = `${this.ss.deviceUrl}/${device.id}`;
      return this.http
        .put(url, JSON.stringify(device))
        .toPromise()
        .then(() => device)
        .catch(this.handleError);
    }
    */
    /*
    create(device: Device): Promise<Device> {
      return this.http
        .post(this.ss.deviceUrl, JSON.stringify(device))
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
    */
    DeviceService.prototype.create = function (device) {
        return this.http
            .post(this.ss.deviceUrl, JSON.stringify(device))
            .map(function (res) { return res.json().data; });
    };
    DeviceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpClient_1.HttpClient, shared_service_1.SharedService])
    ], DeviceService);
    return DeviceService;
}());
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map