
//create an array of objects. Make 3 object with 3 properties


// let priceRanges=[
//     {label: '$',  toolTip:'Inexpensive',minPerPerson:0, maxPerPerson: 10},
//     {label: '$$',  toolTip:'Moderate',minPerPerson:11, maxPerPerson: 20},
//     {label: '$$$',  toolTip:'Expensive',minPerPerson:21, maxPerPerson: 50},
// ];

// let restaruants=[

//     {averagePerPerson: 5}
// ]


// console.log (priceRanges, restaruants);

//create an object to define the rating categories
let ratingRanges = [
    { label: '★',   toolTip: 'Poor',     minScore: 0,  maxScore: 4 },
    { label: '★★',  toolTip: 'Average',  minScore: 5,  maxScore: 6 },
    { label: '★★★', toolTip: 'Good',     minScore: 7,  maxScore: 8 },
    { label: '★★★★',toolTip: 'Excellent',minScore: 9,  maxScore: 10 },
];

//create an object that lists theaters and movie scores of the movie playing at them
let theaters = [
    { movie: 'Interstellar', score: 9 },
    { movie: 'Sharknado', score: 3 },
    { movie: 'Inception', score: 8 },
];

//this function gets the star rating
function getRatingLabel(score){
//for/of loop to go through each property of ratingRanges
for( let range of ratingRanges){
    //if statement checks to see if (score) falls between the minScore and maxScore
    if(score>= range.minScore && score <=range.maxScore){
        return range.label;


};

};
return 'Unrated';
}

// for/of loop to go through theaters and print results
for (let theater of theaters){
    //calling "getRatingLable" to give the proper star ratings for the movies
let label= getRatingLabel(theater.score);
//print label
console.log(`${theater.movie}is rated ${label}`);

}