import { Address } from "./Address";

export class Services{
    addressEquals(a: Address, b: Address): boolean{
        if(a == null || b == null || (a == null && b == null)){
            return false;
        }

        return a.city == b.city &&
               a.zipCode == b.zipCode &&
               a.houseNumber == b.houseNumber;
    }
}