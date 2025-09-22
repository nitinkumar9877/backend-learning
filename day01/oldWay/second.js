console.log("hello first")

function sum(a,b){
    console.log(a+b);
}
// this funtion is not callable in anothe file if we want to use these into another file and also call this function into another file so we use the the bellow
// module.exports = function_name;

module.exports = sum

function sub(a,b){
    console.log(a-b);
}
// for import multiple function we can call as the obj in the code.
module.exports = {sum, sub};