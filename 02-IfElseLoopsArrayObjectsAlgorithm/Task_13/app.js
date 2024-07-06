let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
function countUpper(str) {
    let count = 0;
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            count++;
        }
    }
    return count;
}

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && countUpper(arr[i]) > 2) {
        console.log("Element:", arr[i]);
        console.log("İndeksi:", i);
    }
}
