let a = 10;
let b = 20;
let c = 30;
if(a + b > a + c && a + b > b + c){
    console.log("Big sum result" + " " + a + " " + "and" + " " + b);
}else if(a + c > a + b && a + c > b + c){
    console.log("Big sum result" + " " + a + " " +"and" + " " + c);
}else{
    console.log("Big sum result" + " " + b + " " +"and" + " " + c);
}