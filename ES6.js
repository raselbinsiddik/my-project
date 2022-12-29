//let x = 6;
//if (true) {
 //   let x = 5; 
//}
//console.log(x);


let x = 11;
for (let x = 1; x <= 10; x++){
    console.log(x);
}
console.log(x + " Break");


/*const x = 11;
if (true) {
    x = 10;
}*/
//console.log(x);


/*var x = 30;
var y = 69;
var sum = x + y;
document.write("sum is "+ sum );
//console.log("sum is " + sum + ".the end");*/

let a = 30;
let y = 69;

let sum = a + y;

console.log(`sum is ${sum}.the end`);

let nam = "Anisul Islam";

let m = `I am ${nam}. I am learning javaScript.`;
console.log(m+"Break");

/*function add(x, y) {
    var sum = x + y;
    console.log(sum)
}
add(20, 64);*/

const add = (x, y) => {
    let sum = x + y;
    console.log(sum);
}
add(33, 44);