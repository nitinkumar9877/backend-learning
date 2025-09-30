const express = require("express");
const app = express();

app.use(express.json());

app.listen(4000, () => {
    console.log("Sever listen");
});

const foodMenu = [
    { id: 1, food: "Chowmein", category: "veg", price: 500 },
    { id: 2, food: "Button naan", category: "veg", price: 100 },
    { id: 3, food: "Chicken", category: "non veg", price: 1500 },
    { id: 4, food: "Mutton", category: "non veg", price: 700 },
    { id: 5, food: "Momos", category: "veg", price: 100 },
    { id: 6, food: "Chai", category: "veg", price: 50 },
    { id: 7, food: "Roti", category: "veg", price: 150 },
    { id: 8, food: "kabab", category: "non veg", price: 500 },
    { id: 9, food: "Lolipop", category: "veg", price: 100 },
    { id: 10, food: "Curry", category: "veg", price: 400 }
];

let AddToCard = [];

app.get("/food", (req, res) => {
    res.status(200).send(foodMenu);
})

app.post("/admin", (req, res) => {
    const token = "ABC";
    const access = token === "ABC" ? 1 : 0;
    if (access) {
        foodMenu.push(req.body);
        res.status(201).send("Item add successuflly");
    }
    else {
        res.status(203).send("Not a valid admin");
    }
})

app.delete("/admin/:id", (req, res) => {
    const token = "ABC";
    const access = token === "ABC" ? 1 : 0;
    if (access) {
        const id = parseInt(req.params.id);
        const index = foodMenu.findIndex(item => item.id === id);
        if (index === -1) {

            res.status(200).send("not present in the dataset")
        }
        else {
            foodMenu.splice(index, 1);
            res.status(200).send("successfully deleted")
        }
    }
    else {
        res.status(403).send("Admin is not verify")
    }
})

app.patch("/admin", (req, res) => {
    const token = "ABC";
    const access = token === "ABC" ? 1 : 0;
    if (access) {
        const id = parseInt(req.body.id);
        const foodData = foodMenu.find(item => item.id === id);
        if (foodData) {
            if (req.body.food)
                foodData.food = req.body.food;
            if (req.body.price)
                foodData.price = req.body.price;
            if (req.body.category)
                foodData.category = req.body.category;
            res.send("Data Updated SucessFully");
        }
        else {
            res.status().send("not present in the dataset")
        }
    }
    else {
        res.status(403).send("Admin is not verify")
    }
})

app.get("/user", (req, res) => {
    if (AddToCard.length == 0) {
        res.send("NO item is found in Card Area")
    } else {
        res.status(200).send(AddToCard);
    }
});

app.post("/user/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const foodItem = foodMenu.find(item => item.id === id);
    if (foodItem) {
        AddToCard.push(foodItem);
        res.send("Item add to card successfully")
    }
    else {
        res.send("Add is not add to card")
    }
});


app.delete("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = AddToCard.findIndex(item => item.id === id);
    if (index != -1) {
        AddToCard.splice(index, 1);
        res.send("Item is deleted form the Cards")
    }
    else {
        res.send("Item cound not found");
    }
});