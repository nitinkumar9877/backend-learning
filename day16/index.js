const express = require("express");
const app = express();
const main = require("./Second _file");
const User = require("./models/user");

app.use(express.json());
main()
    .then(async () => {
        console.log("Connected data base");

        app.get("/info", async (req, res) => {
            // res.send("Hello i am listen")
            const ans = await User.find({});
            res.send(ans);
        })

        app.post("/info", async (req, res) => {
            const ans = new User(req.body);
            await ans.save();

            // in single line
            await User.create(req.body);

            res.send("Successfully update the data in DB")

        })


        app.listen(3000, () => {
            console.log("Server listing");
        })


        // const result = await User.find({ Name: "Pintu" });
        // console.log(result);
        console.log("Done");

    })
    .catch((err => {
        console.log(err);
    }))