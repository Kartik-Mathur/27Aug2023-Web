const path = require('path')
const fs = require('fs'); // NodeJs se fs ke object
// ko utha laao

let newMovies = {
    "Avengers":"Spiderman",
    "Spiderman":"Avengers",
    "Marvel":"Dragon",
    "Dragon":"Marvel"
};

let moviePath = path.join(__dirname,'db','movies.json');

fs.writeFile( 
        moviePath,
        JSON.stringify(newMovies),
        (err)=>{
            if(err) return console.error(err);
            console.log("Movies Written Successfully");
        }
)