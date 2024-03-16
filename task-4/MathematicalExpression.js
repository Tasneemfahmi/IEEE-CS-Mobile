const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mathematicalExpression(equation) {
    var result;
    var operator = equation[1];
    var operand1 = parseInt(equation[0]);
    var operand2 = parseInt(equation[2]);
    var providedResult = parseInt(equation[4]);

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    if (result === providedResult) {
        console.log("Yes");
    } else {
        console.log(result);
    }
}

rl.question("", (equation) => {
    mathematicalExpression(equation);
});
