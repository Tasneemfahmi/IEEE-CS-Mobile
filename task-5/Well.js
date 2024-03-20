function well(x){
    var count = 0;
    for (let i = 0 ; i < x.length ; i++){
        if (x[i]=="good"){
            count++;
        }
    }
    if (count == 0){
        return "Fail!"
    } else if (count > 2){
        return "I smell a series!"
    } else {
        return "Publish!"
    }
}

console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');