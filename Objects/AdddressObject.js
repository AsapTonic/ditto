//create an address object with 3 properties: street, city, and zipCode
//Create an function called showAddress(address)

//object with "key" and "values"
const address={

    street: '123 Main St',
    city:'Pembroke',
    zipCode:'33027',

};


function showAddress(address){
//for/in loop goes through every key within my object.
for (let key in address){
    //the "address[key]" makes sure that the vlaue is shown along with my object keys.
    console.log(key, address[key]);
}


};




showAddress(address);







// let address1= new Address ( 'a','b','c');More actions
// let address2= new Address ( 'a','b','c');

// console.log (areEqual(address1, address2)); 
// console.log (areSame(address1, address2));

// function Address (street, city, zipCode){
//     this.street=street;
//     this.city=city;
//     this.zipCode=zipCode;

// }

// function areEqual (address1, address2){
// return address1.street===address2.street &&
// address1.city===address2.city &&
// address1.zipCode===address2.zipCode;
// }

// function areSame (address1, address2){
// return address1 === address2;