function matrix(array) {
    for (let i = 0; i<array.length; i++){
        if (array[i][i] >= 0){
            array[i][i] = 1;
        } else {
            array[i][i] = 0;
        }
    }
    return array;
}

