function MaxAndMin(num1 , num2 , num3) {
    var max = 0;
    var min = 0;
    if (num1>=num2){
        if (num1>=num3){
            max = num1;
            if (num2>=num3){
                min = num3;
            } else {
                min = num2;
            }
        } else {
            max = num3;
            min = num2;
        }
    } else {
        if (num2>=num3){
            max = num2;
            if (num1>=num3){
                min = num3;
            } else {
                min = num1;
            }
        } else {
            max = num3;
            min = num1;
        }
    }
    return min + " " + max;
}

var num1 = 1;
var num2 = 2;
var num3 = 3;
console.log(MaxAndMin(num1 , num2, num3));
