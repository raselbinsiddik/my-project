const input = document.querySelector("input");
const p = document.querySelector("p");

 
input.addEventListener("copy", function () {
    p.innerText="you have copied";
});
input.addEventListener("cut", function () {
    console.log("you have cut");
});
input.addEventListener("paste", function () {
    console.log("you have paste");
});