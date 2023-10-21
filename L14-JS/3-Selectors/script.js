// document:DOM
// 1. GET ELEMENTS USING TAG NAME
// let h1 = document.getElementsByTagName('h1');

// 2. GET ELEMENTS USING BY ID
// let h1 = document.getElementById('world');

// 3. GET ELEMENTS USING CLASSNAME
// let movies = document.getElementsByClassName('movie');

// 4. GET ELEMENT USING Extensions
// let movies = document.querySelector('.movie');
// let movies = document.querySelectorAll('.movie');
// let movies = document.querySelector('#movie-1');
// let movie1 = document.querySelector('#movie-1');

// movie1.innerText += ' <strong>Adding Something New!</strong>'
// console.log(movie1.innerText);
// Will delete the item 'movie1' from DOM
// movie1.remove();

let movie3 = document.querySelector('#movie-3');
console.log(movie3)
// SELECTING CLASSLIST OF AN ELEMENT
console.log(movie3.classList)

// ADDING A CLASS TO CLASSLIST COLLECTION
movie3.classList.add('mymovie');
// movie3.classList.remove('mymovie');

// console.log(movie3.previousSibling)
// console.log(movie3.previousElementSibling)
// console.log(movie3.nextElementSibling)
// console.log(movie3.parentElement)

// CREATING AN ELEMENT TO ADD ON DOM
// 1. Creating an list item first
let li = document.createElement('li');
console.log(li);

li.innerText = 'Antman';
li.classList.add('mymovie');
// Adding ID to an Element
// li.id = 'movie-6';

// Adding some random attribute
li.setAttribute('name','antman');

console.log(li.getAttribute('name'));

// Pick up the movie list element
let movies = document.querySelector('.movies');

movies.appendChild(li);