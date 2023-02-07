const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'todo';

client.connect();

const db = client.db(dbName);
const todos = db.collection('todos')

module.exports = {
    client,
    db,
    todos,
}