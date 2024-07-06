let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let maxcüt = null;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        if (maxcüt === null || arr[i] > maxcüt) {
            maxcüt = arr[i];
        }
    }
}

if (maxcüt !== null) {
    console.log(maxcüt);
} else {
    console.log("Array-də cüt element yoxdur.");
}
