// use npm i before run 
const express = require("express");

const app = express();

app.use("/abou?t", (req, res) => {
    res.send("About page");
})
// u become optional for the route with and without it gives same result

app.use("/contac+t", (req, res) => {
    res.send("Contact page")
})
// use multiple time of t

app.use("/Hel*p", (req, res) => {
    res.send("Help page")
})
// can fill anything btw hel and p


app.use("/about/:id", (req, res) => {
    console.log(req.params);
    res.send("About page");
})
// /: is use to dynamic routing 


app.use("/", (req, res) => {
    res.send("sever response");
    // res.send({ "Name": "Saini", "Age": 21, "Day": "Tuesday" });
})


app.listen(3000, () => {
    console.log("App listen")
})
