const bcrypt = require("bcrypt");

const password = "Saini@123"

async function hasing() {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const hassPassWIthRound = await bcrypt.hash(password, 10);
    console.log(hashPassword);
    console.log(salt);
    console.log(hassPassWIthRound);

    // order must be same
    // bcrypt.compare(plainPassword, hashedPassword)
    const CompareResult = await bcrypt.compare(password, hashPassword);
    if (CompareResult) {
        console.log(CompareResult);
        console.log("Same password");
    }
}

hasing();