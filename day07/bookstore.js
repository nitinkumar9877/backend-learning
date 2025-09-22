const express = require("express");
const app = express();

const bookStore = [
    { id: 1, name: "Harry Poter", author: "DevFlex" },
    { id: 2, name: "Spider man", author: "Hello" },
    { id: 3, name: "Nexus", author: "Rohit negi" }
]

app.listen(4000, () => {
    console.log("Sever listen");
});

app.get("/book", (req, res) => {
    res.send(bookStore);
});

app.get("/book/:id", (req, res) => {
    console.log(req.params);
    console.log(typeof req.params);
    console.log(typeof req.params.id);
    const id = parseInt(req.params.id);
    console.log(id);
    console.log(typeof id);
    const book = bookStore.find(info => info.id == id);
    console.log(book)
    res.send(book);
});
app.use(express.json());

app.post("/book", (req, res) => {
    console.log(req.body);
    bookStore.push(req.body);
    res.send("Data save successfully");
})