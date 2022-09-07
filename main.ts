import { UserRepository } from "./UserRepository";
import {Services} from "./Services";

var userRepository = new UserRepository();
var services = new Services();

var user1 = userRepository.getUserById(1);
var user2 = userRepository.getUserById(3);

if(services.addressEquals(user1.address,user2.address)){
    console.log("Son iguales");
} else {
    console.log("Son diferentes");
}