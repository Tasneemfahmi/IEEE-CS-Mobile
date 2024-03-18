function Even(num) {
    if (num>1){
        for (let i = 2; i <= num; i+=2) {
            console.log(i);
        }
    } else {
        console.log(-1);
    }
}

var num = 2;
Even(num);
