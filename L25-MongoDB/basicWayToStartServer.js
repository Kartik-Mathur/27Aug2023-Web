const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const { MongoClient } = require('mongodb');
const db_url = 'mongodb://localhost:27017';
const client = new MongoClient(db_url);

const dbName = 'mydb';


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'')));

// Way-1 to connect our DB
// client.connect().then(() => {
//     app.listen(PORT, () => {
//         console.log(`http://localhost:` + PORT);
//     });
// })
//     .catch(err => {
//         console.log(err);
//     })

// Way 2 to connect to our DB
async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    // const collection = db.collection('documents');

    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
    // the following code examples can be pasted here...

    return 'done.';
}

main();

