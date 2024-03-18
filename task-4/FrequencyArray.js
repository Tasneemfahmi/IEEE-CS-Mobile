function Lucky(N, M, arr) {
    const resultArr = [];
    for (let i = 0; i < M; i++) {
        resultArr.push(0);
        for (let j = 0; j < N; j++) {
            if (arr[j]==i+1) {
                resultArr[i]++;
            }
        }
    }
    for (let i = 0; i < M; i++) {
        console.log(resultArr[i]);
    }
}

var N = 10;
var M = 5;
const arr = [1,2,3,4,5,3,2,1,5,3];

Lucky(N,M,arr);
