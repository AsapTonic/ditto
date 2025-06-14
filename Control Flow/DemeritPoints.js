
//speed limit = 60
//10 -> 1 point
//math.floor (1.3)
//5 point -> suspended
//0 points: "safe driving"
//1-4 points "Caution"




// checkSpeed(75);

// function checkSpeed (speed){
//     const speedLimit = 70
//     const kmPerPoint=5;

// // if speedLimit is greater than or equal to (speed) print "OK"
//     if (speed<=speedLimit)
//         console.log ('Ok');


//     // points is determined by speed subtracted from speedLimit and divided by kmPerPoint which is 5, and rounded down by the Math.House method.
//     else{
//         let points = Math.floor((speed - speedLimit)/ kmPerPoint);
//         if (points >=12)
//             console.log ('License suspended');

//         else 
//         console.log ('Points', points);
//     }





// if (speed=speeedLimit)
//     return 0;

// if (speed>speedLimit && speed <=75)
//     return 1;

// if (speed)






const speedLimit= 60;
const kmPerPoint= 10;

checkSpeed (70);

function checkSpeed(speed){

if (speed<=60)
    console.log('Safe Driving');


let points= Math.floor((speed-speedLimit)/10);
if (points>=5)
    console.log ('License Suspended');

else
console.log('Points',points);


}