// getting-started.js
const mongoose = require('mongoose');

async function main() {

    // end me bookstore khud daala hai for new database in campass
    await mongoose.connect('mongodb+srv://day15Learn:demo12345@day15a.5co4ep6.mongodb.net/AdharInfo');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

}


module.exports = main;