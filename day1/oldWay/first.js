console.log("hello second");


// require("./second")
// i need second so we do
// this is done in the backend only without importing the file in that




// if we want to use sum and sub so we can use the a variable for the store the function name 
// and for multi function we also use the obj in this
const { sum, sub } = require("./second")
sum(5,2)
sub(6,2)