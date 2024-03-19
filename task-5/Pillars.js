function pillars(numPill, dist, width) {
    var totalDist;
    if (numPill >= 2){
        totalDist = (numPill-2)*width + (numPill-1)*dist*100;
    } else {
        totalDist = 0;
    }
    return totalDist;
}
console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30));

