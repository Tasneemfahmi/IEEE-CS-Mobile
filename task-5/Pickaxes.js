function stonePick(arr) {
    var cobblestones = 0;
    var sticks = 0;
    var wood = 0;
    var pickaxes = 0;
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i]=="Sticks"){
            sticks++;
        } else if (arr[i]== "Cobblestone"){
            cobblestones++;
        } else if (arr[i] == "Wood") {
            wood++;
        }
    }
    while (cobblestones >= 3 && (sticks >= 2 || wood >= 1) ){
        pickaxes++;
        cobblestones -= 3;
        sticks -= 2;
        if (wood>=1){
            sticks += 4;
            wood -= 1;
        }
    }
    return pickaxes;
}