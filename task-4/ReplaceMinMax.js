function ReplaceMinMax(N, arr) {
    const resultArr = [];
    var min = arr[0];
    var max = arr[0];
    for (let i = 0; i < N; i++) {
        if (arr[i]>=max){
            max = arr[i];
        }
        if (arr[i]<=min){
            min = arr[i];
        }
    }
    for (let i = 0; i < N; i++) {
        if (arr[i]!=min && arr[i]!= max){
            resultArr.push(arr[i]);
        } else if (arr[i]==min){
            resultArr.push(max);
        } else {
            resultArr.push(min);
        }
    }
    console.log(...resultArr);
}

var N = 5;
const arr = [4,1,3,10,8];

ReplaceMinMax(N,arr);
