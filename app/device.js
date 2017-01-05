"use strict";
var Device = (function () {
    function Device(deviceId, type, creationDate, name, username, codecOrder3G, codecOrder, dtmfAll, dtmfOrder, honorFirstCodec, honorFirstCodec3G) {
        this.deviceId = deviceId;
        this.type = type;
        this.creationDate = creationDate;
        this.name = name;
        this.username = username;
        this.date = new Date();
        this.codecOrder3G = codecOrder3G;
        this.codecOrder = codecOrder;
        this.dtmfAll = dtmfAll;
        this.dtmfOrder = dtmfOrder;
        this.honorFirstCodec = honorFirstCodec;
        this.honorFirstCodec3G = honorFirstCodec3G;
    }
    return Device;
}());
exports.Device = Device;
//# sourceMappingURL=device.js.map