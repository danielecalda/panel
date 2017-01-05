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
require('rxjs/add/operator/toPromise');
var httpClient_1 = require('../httpClient');
var DidService = (function () {
    function DidService(http) {
        this.http = http;
    }
    DidService.prototype.getDids = function (pbxId) {
        return this.http.get("https://devapi.voverc.com/api/v2/pbxes/" + pbxId + "/dids")
            .map(function (response) { return response.json(); });
    };
    DidService.prototype.update = function (pbxId, didId, did) {
        return this.http.put("https://devapi.voverc.com/api/v2/pbxes/" + pbxId + "/dids/" + didId, JSON.stringify(did))
            .map(function (response) { return response.json(); });
    };
    DidService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [httpClient_1.HttpClient])
    ], DidService);
    return DidService;
}());
exports.DidService = DidService;
//# sourceMappingURL=did.service.js.map