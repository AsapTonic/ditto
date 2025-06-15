
//create a blog post object with: title, body, author, views:number, and comments, isLive


let post ={
title: 'a',
body: 'b',
author: 'c',
views: 10,
//made comments an array to hold both author and body properties inside
comments: [
    
    {author:'a', body: 'b',},
    {author: 'c', body: 'd',},
    
],
isLive: true

};
console.log(post);