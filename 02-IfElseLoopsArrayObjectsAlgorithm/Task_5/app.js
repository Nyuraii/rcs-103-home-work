let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let minIndex = 0;
let minValue = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
        minValue = arr[i];
        minIndex = i;
    }
}

console.log(minIndex);
