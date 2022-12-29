//setTimeout(() => {
  //  console.log("hi");
//}, 3000);


//setTimeout(display, 110);

//function display() {
  //  console.log("display function")};


/*const saveButton = document.querySelector(".save-btn");

const message = document.querySelector(".message");

saveButton.addEventListener('click', saveUser);
function saveUser() {
    message.textContent = "user registration successful";

    setTimeout(() => {
        message.textContent = "";
    }, 2000);
}*/


const saveButton = document.querySelector(".save-btn");

const message = document.querySelector(".message");

saveButton.addEventListener("click", displayCount);
function displayCount() {
    let count = 0;
    message.textContent = count;

    setInterval(() => {
        count++;
        message.textContent = count;
    }, 1000);

}
