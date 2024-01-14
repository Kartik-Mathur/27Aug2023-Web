const { MongoClient } = require('mongodb');
const db_url = 'mongodb://localhost:27017';
const client = new MongoClient(db_url);


module.exports = client;
