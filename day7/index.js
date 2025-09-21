// import express form "express";
const express = require("express");
const app = express()

// app.use("/user", (req, res) => {
//     res.send({ name: "Saini" });
// })


// parsing to acccess the post data from the postmon 
// if we do this then we access the req.body otherwise it will give us undefined
app.use(express.json());


app.get("/user", (req, res) => {
    res.send({ name: "Saini" });
})

app.post("/user", (req, res) => {
    console.log("Data saved Successfully");
    console.log(req.body);
    res.send("your req is sucessfully accepted");
})
app.listen(3000, () => {
    console.log("Server listen")
})