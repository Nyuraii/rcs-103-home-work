let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let ədədyoxla = parseInt(prompt("Ədədi daxil edin:"));
let ədədvar = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ədədyoxla) {
        ədədvar = true;
        break;
    }
}

if (ədədvar) {
    console.log("Ədəd array-də mövcuddur");
} else {
    console.log("Ədəd array-də mövcud deyil");
}
