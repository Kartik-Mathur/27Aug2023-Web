// Selection an ELEMENT using jQuery
let el = $('h1'); // will select all h1 element 

// Selecting element using class
// HTML par jitni bhi elements hai with class 
// para saare le aaega: This works like querySelectorAll
let para = $('.para');

// Selecting element using id
let about = $('#about');

console.log(el);
console.log(para);
console.log(about);

// saare para ko remove krne ke liye
// para.remove();

// text and html are getters and setters
// To change text of an element
para.text('Hello World');
// To change HTML of elements
para.html('<b>Hello Hello!!!</b>')



// Adding new elements on DOM
// 1. Create a new element
let li = $('<li>'); // This creates an element(li)

console.log(li)
// 2. Add the content inside li
// Let's understand chaining in jQuery
li
    .text('Avengers')
    .css('color','purple')
    .css('background-color','pink');

// li
//     .text('Avengers')
//     .css('background-color','')


// 3. Append it to an element that will become the
// parent of new element we are going to add
let movies = $('.movies');
movies.append(li);

// NextElementSibling
console.log(about.next())
movies.insertBefore(about)
console.log(about.prev())
console.log(about.parent())