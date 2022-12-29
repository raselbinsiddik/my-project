const form = document.querySelector("form");
const name = document.querySelector("div #name");
const email = document.querySelector("div #email");
const passward = document.querySelector("div #passward");

form.addEventListener("submit", formHandler);

function formHandler(e) {
   e.preventDefault(); 
   console.log();
   console.log();
   console.log();

   const userInfo = {
      name: name.value,
      email: email.value,
      password: password.value,
   };

   console.log(userInfo);
   name.value = "";
   email.value = "";
   password.value = "";
}
