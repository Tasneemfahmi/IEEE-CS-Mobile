function Lucky(num1, num2) {
    const lucky = [];
    for (let i = num1; i <= num2; i++) {
        var flag = true;
        var number = i.toString();
        for (let j = 0; j < number.length; j++) {
            if (number[j]!=4 && number[j]!=7){
                flag = false;
                break;
            }
        }
        if (flag==true){
            lucky.push(i);
        }
    }
    console.log(...lucky)
}

var num1 = 4;
var num2 = 20;

Lucky(num1,num2);
