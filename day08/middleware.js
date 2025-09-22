const express = require("express");
const app = express();

app.use(express.json());

// we can store all response into array
// app.use("/user", [(req, res, next) => {
//     // res.send("i am first");
//     console.log("first")
//     next(); // it is called route handler
//     console.log("six");
// },
// (req, res, next) => {
//     console.log("second")
//     // res.send("i am second");
//     next();
//     console.log("fifth");
// },
// (req, res) => {
//     console.log("third")
//     res.send("i am third");
//     console.log("fourth");
// }
// ]
// )

// second way

// app.use("/user", (req, res, next) => {
//     // res.send("i am first");
//     console.log("first");
//     next(); // it is called route handler
//     console.log("six");
// })

// app.use("/user", (req, res, next) => {
//     // res.send("i am first");
//     console.log("second");
//     next(); // it is called route handler
//     console.log("fifth");
// })

// app.use("/user", (req, res) => {
//     // res.send("i am first");
//     console.log("third")
//     res.send("third hu bhai")
//     console.log("fourth");
// })

app.listen(3000, () => {
    console.log("Sever listen");
});


app.use("/user", (req, res, next) => {
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    next();``
})

app.get("/user", (req, res) => {
    res.send("app get")
})

app.post("/user", (req, res) => {
    res.send("app post")
})

app.patch("/user", (req, res) => {
    res.send("app Patch")
})

app.put("/user", (req, res) => {
    res.send("app put")
})

app.delete("/user", (req, res) => {
    res.send("app delete")
})