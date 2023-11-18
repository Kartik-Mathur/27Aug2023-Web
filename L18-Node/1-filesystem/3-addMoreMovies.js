const fs = require('fs');

let movies = {
    "Hulk":"SheHulk",
    "Ironman":"Heman"
}

fs.readFile(
    'movies.json',
    {
        encoding:'utf-8'
    },
    (err,data)=>{
        data = JSON.parse(data);
        
        data = {
            ...data,
            ...movies
        }
        fs.writeFile(
            'movies.json',
            JSON.stringify(data),
            {
                flag:'w'
            },
            (err)=>{
                if(err) return console.error(err);
                console.log("Sab Done");
            }
        )
    }
)