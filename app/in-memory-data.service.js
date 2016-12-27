"use strict";
var admin_1 = require('./admin');
var billing_details_1 = require('./billing-details');
var user_1 = require('./user');
var company_1 = require('./company');
var device_1 = require('./device');
var did_1 = require('./did');
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var company = [
            new company_1.Company(1, 'Voverc Srl', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), [new user_1.User(100, 'pippo', 'pippo@voverc.it', '3454535'), new user_1.User(101, 'pluto', 'pluto@voverc.it')]),
            new company_1.Company(2, 'Apple Spa', 'applespa', '078923434', 'info@apple.it', true, [new did_1.Did('099997890'), new did_1.Did('045678456')], 34, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), [new user_1.User(200, 'giacomo', 'giacomo@apple.it', '7285823785'), new user_1.User(201, 'mario', 'mario@apple.it', '34234234234')]),
            new company_1.Company(3, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(4, 'dcccc', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(5, 'fffdsfds', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(6, 'dfdsfds', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(7, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(8, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(9, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(10, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(11, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(12, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(13, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(14, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(15, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(16, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), []),
            new company_1.Company(17, 'dsvfdgs', 'vovercsrl', '788727853', 'info@voverc.it', true, [new did_1.Did('34523456'), new did_1.Did('9052522')], 22, 'type', new admin_1.Admin(), new billing_details_1.BillingDetails(), [])
        ];
        var device = [new device_1.Device(300, 'pc', 'dpro1', 'pippo', 'dsd', 'dsd'), new device_1.Device(301, 'pc', 'dpro2', 'pluto'), new device_1.Device(302, 'mop', 'dpro3', 'pippo'), new device_1.Device(303, 'pc', 'dpro4', 'pippo')];
        var user = [];
        return { company: company, device: device, user: user };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map