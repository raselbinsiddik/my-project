var names = ["anis", "rabeya", "roki", "joki", "moni"];
console.log(names);

/*names.shift();
console.log(names);

names.unshift("shagor");
console.log(names);*/

//adding
/*names.splice(2, 0, "karim", "rohim");
console.log(names);*/

var newArray = names.slice(2);
console.log(newArray);
console.log(names);

var sortedNames = names.sort();
console.log(sortedNames);

var sortedNames = names.sort();
names.reverse();
console.log(sortedNames);


var numbers = [20, 56, 43, 21, 12, 11,];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);