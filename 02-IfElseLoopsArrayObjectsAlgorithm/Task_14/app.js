function getFirst(arr, n) {
    if (n === undefined) {
        return arr[0];
    } else {
        return arr.slice(0, n);
    }
}

console.log(getFirst([1, 73, 99, 20])); 
console.log(getFirst([1, 73, 99, 20], 2)); 
console.log(getFirst([1, 73, 99, 20], 0)); 
console.log(getFirst([1, 73, 99, 20], 4)); 
