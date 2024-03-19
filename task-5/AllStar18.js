function strCount(str, letter){
    if (!str.includes(letter)){
        return 0;
    } else {
        var count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == letter) {
                count++;
            }
        }
        return count;
    }
}
console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('',      'z'));