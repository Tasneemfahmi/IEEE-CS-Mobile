function Summation(num) {
    var sum =0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

var num = 3;
console.log(Summation(num));

