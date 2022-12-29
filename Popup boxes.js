//alert

//alert("are you make sure");
//console.log("delet");

/*function deletSomething() {
    let value = confirm("Do you want to delete");
    if (value) {
        console.log("deleted");
    } else {
        console.log("not deleted");
    }
}
deletSomething();*/

function welcomeMessage() {
    var h1 = document.createElement('h1');
    let text;

    var name = prompt("Enter your name: ");
    if (name == null || name == '') {
        text='no name found'
    } else {
        text = "Assalamualaikum " + name;
    }
    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

welcomeMessage();
