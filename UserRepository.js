"use strict";
exports.__esModule = true;
exports.UserRepository = void 0;
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.getUserById = function (userId) {
        if (userId == 1) {
            return { id: userId, name: "Rosmery", address: { city: "Santo Domingo", zipCode: 1234, houseNumber: "9A" } };
        }
        if (userId == 2) {
            return { id: userId, name: "Rosmery", address: { city: "Santo Domingo", zipCode: 1234, houseNumber: "9A" } };
        }
        if (userId == 3) {
            return { id: userId, name: "Daniel", address: { city: "Santo Domingo", zipCode: 1534, houseNumber: "9A" } };
        }
        return { id: userId, name: "Rosmery", address: { city: "Santo Domingo", zipCode: 1234, houseNumber: "9A" } };
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
