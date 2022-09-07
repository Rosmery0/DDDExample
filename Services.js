"use strict";
exports.__esModule = true;
exports.Services = void 0;
var Services = /** @class */ (function () {
    function Services() {
    }
    Services.prototype.addressEquals = function (a, b) {
        if (a == null || b == null || (a == null && b == null)) {
            return false;
        }
        return a.city == b.city &&
            a.zipCode == b.zipCode &&
            a.houseNumber == b.houseNumber;
    };
    return Services;
}());
exports.Services = Services;
