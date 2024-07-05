let n, m, k, a = 652;

n = (a / 100) | 0;
m = ((a / 10) | 0) % 10;
k = a % 10;

console.log("Result:"+ " " + n + "," + m + "," + k);