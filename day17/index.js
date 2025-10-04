const express = require("express");
const app = express();
const main = require("./database");
const User = require("./models/user");

app.use(express.json());

app.post("/info", async (req, res) => {
    try {
        const mandatoryField = ["FirstName", "Email", "Age"];
        const IsAllowed = mandatoryField.every((k) => Object.keys(req.body).includes(k));
        if (!IsAllowed) {
            throw new Error("Field Missing");
        }
        await User.create(req.body);
        res.send("Succesfully Post")
    }
    catch (err) {
        res.send(err.message);
    }
})

app.get("/info", async (req, res) => {
    try {
        const data = await User.find({});
        res.send(data);
    }
    catch (err) {
        res.send(err);
    }
})

// app.delete("/user/:id", async (req, res) => {
//     try {

//         await User.findByIdAndDelete(req.params.id);
//         res.send("Deleted successsfully");
//     }
//     catch (err) {
//         res.send("Error -> " + err)
//     }
// })

app.delete("/info/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted successfully");
    } catch (err) {
        res.send("Error -> " + err);
    }
});

// app.patch("/info", async (req, res) => {
//     try {
//         const { _id, ...update } = req.body;
//         await User.findByIdAndUpdate(_id, update);
//         res.send("Successsfully patch")
//     }
//     catch (err) {
//         res.send("Error -> " + err);
//     }
// })

app.patch("/info", async (req, res) => {
    try {
        const { _id, ...update } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            { $set: update },
            { new: true, runValidators: true }  // important options
        );

        if (!updatedUser) {
            return res.status(404).send("User not found");
        }

        res.json(updatedUser);  // send updated document back
    }
    catch (err) {
        res.status(400).send("Error -> " + err.message);
    }
});



main()
    .then(async () => {
        console.log("Connected data base");

        app.listen(3000, () => {
            console.log("Server listing");
        })

        console.log("Done");

    })
    .catch((err => {
        console.log(err);
    }))