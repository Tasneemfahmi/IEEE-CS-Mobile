function toCsvText(array) {
    var output = "";
    for (let i = 0 ; i < array.length ; i++){
        for (let j = 0 ; j < array[i].length ; j++){
            if (j===array[i].length-1 && i!== array.length-1){
                output = output+array[i][j]+`\n`;
            } else if (j!== array[i].length-1){
                output = output+array[i][j]+',';
            } else {
                output = output+array[i][j];
            }
        }
    }
    return output;
}
console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
]))