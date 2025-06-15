
//when we call a row with number, each row should show the stars in the console. Each row holding the same amount of stars as its numbered place.

showStars(5);

function showStars(rows){

for (let row= 1; row<=rows; row++){

    let pattern='';
for(let i=0; i<row; i++)
    pattern += '*';

console.log(pattern);

}


}