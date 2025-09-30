// mongodb+srv://day15Learn:demo12345@day15a.5co4ep6.mongodb.net/
// Mongodb Connection Link from MongoDB Atlets to MongoDB Campass
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// demo12345
const url = "mongodb+srv://day15Learn:demo12345@day15a.5co4ep6.mongodb.net/"
const client = new MongoClient(url);

// Database Name
const dbName = 'Learning';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');

    // to get the code we use this in our code
    const findResult = collection.find({});


    // // it use to get the data upper collection.find() will just point the data and we want to access so we get the use the toArray();
    // const ans = await findResult.toArray();
    // // toArray() supporse if we have 5gb of data then it will push all the data on real time which mean it will overload our ram and crash our data

    // console.log('Found documents =>', findResult);

    for await (const doc of findResult) {
        console.log(doc);
    };

    const insertResult = await collection.insertOne({Gender:"Male",Age:34});
    console.log('Inserted documents =>', insertResult);

    // the following code examples can be pasted here...

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());