const express = require("express");
const app = express();

const bookStore = [
    { id: 1, name: "Harry Poter", author: "DevFlex" },
    { id: 2, name: "Spider man", author: "Hello" },
    { id: 4, name: "Our man", author: "Hello" },
    { id: 3, name: "Nexus", author: "Rohit negi" }
]

app.use(express.json());

app.listen(4000, () => {
    console.log("Sever listen");
});

// app.get("/book", (req, res) => {
//     res.send(bookStore);
// });

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

app.post("/book", (req, res) => {
    console.log(req.body);
    bookStore.push(req.body);
    res.send("Data save successfully");
})

app.patch("/book", (req, res) => {
    console.log(req.body);

    const id = parseInt(req.body.id);
    const book = bookStore.find(info => info.id === id);

    if (req.body.author)
        book.author = req.body.author;

    if (req.body.name)
        book.name = req.body.name;
    res.send("patch updated successfully");
})

app.put("/book", (req, res) => {
    const id = parseInt(req.body.id);
    const book = bookStore.find(info => info.id === id);
    book.author = req.body.author;
    book.name = req.body.name;
    res.send("put successfully")
})


app.delete("/book/:id", (req, res) => {

    const id = parseInt(req.params.id);
    console.log(id);


    const index = bookStore.findIndex(info => info.id === id);

    if (index === -1) {
        return res.status(404).send("Book not found");
    }
    console.log(index)
    bookStore.splice(index, 1);
    res.send("Delete successfully")
})


app.get("/book", (req, res) => {
    console.log(req.query);
    const bookName = bookStore.filter(info => info.author === req.query.author);
    res.send(bookName);
});

// app.get("/book", (req, res) => {
//     console.log(req.query); // e.g. { author: 'Hello' }

//     const bookName = bookStore.find(info => info.author === req.query.author);

//     // if (!bookName) {
//     //     return res.status(404).send("Book not found");
//     // }

//     res.send(bookName);
// });