// getting-started.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

main().catch(err => console.log(err));

async function main() {

    // end me bookstore khud daala hai for new database in campass
    await mongoose.connect('mongodb+srv://day15Learn:demo12345@day15a.5co4ep6.mongodb.net/bookStore');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    const userSchema = new Schema({
        Name: String,
        Age: Number,
        City: String,
    })
    
    // model create krna database ke baad
    // mongoose.model("user", userSchema);
    // const User = mongoose.model("user", userSchema);
    const User = mongoose.models.user || mongoose.model("user", userSchema);

    // yaha pr jaise humhe ptaa hai ki isko object ki tarah treat krne me help krta hai mongoose to hota kiya hai ki ye hamare liye yaha ek class define krta hai jo ki blue print hoti hai and agr usko value deni hai to iska obj bana kr hi diya jata hai

    // create object
    const user1 = new User({ Name: "Saini", Age: 23, City: "Chandighar" });
    await user1.save();


    // console.log("User saved:", user1);

    // second way
    await User.create({ Name: "Pintu", Age: 43, City: "Bihar" });


    // for multiple entry
    await User.insertMany([{ Name: "Raju", Age: 18, city: "Banglore" }, { Name: "Abhishek", Age: 2, city: "Chapra" }, { Name: "Rahul", Age: 50, city: "Phagwara" }])
    console.log("Successfully Saved all data");

}
main()
    .then(() => {
        console.log("Connected sucessfully");
    })
    .catch((err) => {
        console.log(err);
    })