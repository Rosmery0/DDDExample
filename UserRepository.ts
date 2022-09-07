import { User } from "./User";

export class UserRepository{
    getUserById(userId: number): User{
        if(userId == 1){
            return {id: userId, name: "Rosmery", address: {city: "Santo Domingo", zipCode: 1234, houseNumber: "9A"}};
        }
        if(userId == 2){
            return {id: userId, name: "Rosmery", address: {city: "Santo Domingo", zipCode: 1234, houseNumber: "9A"}};
        }
        if(userId == 3){
            return {id: userId, name: "Daniel", address: {city: "Santo Domingo", zipCode: 1534, houseNumber: "9A"}};
        }
        return {id: userId, name: "Rosmery", address: {city: "Santo Domingo", zipCode: 1234, houseNumber: "9A"}};
        
    }
}