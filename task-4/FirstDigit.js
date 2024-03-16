// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

function FirstDigit(num) {
    var number = "" + num;
    var firstDigit = number[0];
    if (firstDigit%2==0){
        return "EVEN";
    } else {
        return "ODD";
    }
}

var num = 4569;
console.log(FirstDigit(num));
// rl.question("", (num) => {
//     console.log(FirstDigit(num));
// });
