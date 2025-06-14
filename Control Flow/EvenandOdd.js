

showNumbers(20);

function showNumbers(limit){

//let i equal 0, i be less than or equal to limit, and add 1 to i every loop.
    for (let i=0; i<=limit; i++){

        //if number is divisible by 2 log "even"
if (i%2===0) 
    console.log('EVEN');

//if number isn't divisible by 2 log "odd"
else
console.log ('ODD');


}
}