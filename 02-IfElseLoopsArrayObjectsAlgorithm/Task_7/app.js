let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let minCütIndex = null;
let minCütValue = Infinity;
let maxTəkIndex = null;
let maxTəkValue = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        if (arr[i] < minCütValue) {
            minCütValue = arr[i];
            minCütIndex = i;
        }
    } else {
        if (arr[i] > maxTəkValue) {
            maxTəkValue = arr[i];
            maxTəkIndex = i;
        }
    }
}
if (minCütIndex !== null && maxTəkIndex !== null) {
    let temp = arr[mincütIndex];
    arr[mincütIndex] = arr[maxTəkIndex];
    arr[maxTəkIndex] = temp;
}

console.log(arr);
