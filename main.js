"use strict";
exports.__esModule = true;
var UserRepository_1 = require("./UserRepository");
var Services_1 = require("./Services");
var userRepository = new UserRepository_1.UserRepository();
var services = new Services_1.Services();
var user1 = userRepository.getUserById(1);
var user2 = userRepository.getUserById(3);
if (services.addressEquals(user1.address, user2.address)) {
    console.log("Son iguales");
}
else {
    console.log("Son diferentes");
}
