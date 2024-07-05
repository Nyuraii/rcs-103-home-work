let a = 4;
let b = 5;
let c = 6;

let bigNumber;
let littleNumber;

if (a >= b && a >= c) {
    if (b >= c) {
        bigNumber = a * 100 + b * 10 + c;
    } else {
        bigNumber = a * 100 + c * 10 + b;
    }
} else if (b >= a && b >= c) {
    if (a >= c) {
        bigNumber = b * 100 + a * 10 + c;
    } else {
        bigNumber = b * 100 + c * 10 + a;
    }
} else {
    if (a >= b) {
        bigNumber = c * 100 + a * 10 + b;
    } else {
        bigNumber = c * 100 + b * 10 + a;
    }
}

if (a <= b && a <= c) {
    if (b <= c) {
        littleNumber = a * 100 + b * 10 + c;
    } else {
        littleNumber = a * 100 + c * 10 + b;
    }
} else if (b <= a && b <= c) {
    if (a <= c) {
        littleNumber = b * 100 + a * 10 + c;
    } else {
        littleNumber = b * 100 + c * 10 + a;
    }
} else {
    if (a <= b) {
        littleNumber = c * 100 + a * 10 + b;
    } else {
        littleNumber = c * 100 + b * 10 + a;
    }
}

console.log("Big number:", bigNumber);
console.log("Little number:", littleNumber);
