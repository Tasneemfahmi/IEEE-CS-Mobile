// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

function AgeInDays(age) {
    var years = 0;
    var months = 0;
    var days = 0;
    while (age>0){
        if (age-365>=0){
            years++;
            age-=365;
            continue;
        }
        if (age-30>=0){
            months++;
            age-=30;
            continue;
        }
        days = age;
        age = 0;
    }
    return `${years} years
${months} months
${days} days`
}

var age = 30;
console.log(AgeInDays(age));
// rl.question("", (age) => {
//     AgeInDays(parseInt(age));
// });
