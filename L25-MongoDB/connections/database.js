const { MongoClient } = require('mongodb');
const db_url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(db_url);
let _db;

const mongoConnect = ()=>{
    return client.connect()
    .then(()=>{
        const dbName = 'myDB';
        _db = client.db(dbName);        
    })
    .catch(err=>{
        console.log(err);
    })
}

function getDB(){
    if(_db) return _db;
    return null;
}

module.exports = {
    mongoConnect,
    getDB
};
