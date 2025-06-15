
//create a factory function and constructor FUNCTION USING THE ADDRESS OBJECT

let address= new Address('a','b','c');
console.log(Address)
//Factory function
function createAddress (street, city, zipCode){
return {
    street,
    city, 
    zipCode
};
}
//Constructo function
function Address (street, city, zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
}