
//create 2 functions: 1) areEqual: (address1, address2)
//2) areSame:(address1, address2)
//use these functiions to determine if the objects are the same.

let address1= new Address ( 'a','b','c');
let address2= new Address ( 'a','b','c');

console.log (areEqual(address1, address2)); 
console.log (areSame(address1, address2));

//constructor function
function Address (street, city, zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;

}

function areEqual (address1, address2){
    return address1.street===address2.street &&
    address1.city===address2.city &&
    address1.zipCode===address2.zipCode;
}

//using the strict equality operator on address 1 and 2's properties to see if the values are both equal and the same date type.
function areSame (address1, address2){
return address1 === address2;
}

//once logged on to the console: areEqual= true because the key and values of both object match.
//areSame= false because they are not the same object in memory, both are seperate.