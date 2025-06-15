//build a constructor function  for the blog post object



// let post ={
// title: 'a',
// body: 'b',
// author: 'c',
// views: 10,
// //made comments an array to hold both author and body properties inside
// comments: [
    
//     {author:'a', body: 'b',},
//     {author: 'c', body: 'd',},
    
// ],
// isLive: true

// };


//remember to use "new" tag and capital first letter when calling constructor functions
let post = new Post('a','b','c');
console.log (post);
//less parameters for a function the better, so only log author, title, body
function Post(title, body, author){
//".this" = set the name of the new property being created
this.title=title;
this.body=body;
this.author=author;
this.views=0;
this.comments=[];
this.isLive=false;



}