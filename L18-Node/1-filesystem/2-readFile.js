const fs = require('fs');

fs.readFile(
    'movies.json',
    {
        encoding:'utf8'
    },
    (err,data)=>{
       if(err) return console.error(err);
       data = JSON.parse(data);
       console.log(data);
    //    console.log(data.toString());
    }
)