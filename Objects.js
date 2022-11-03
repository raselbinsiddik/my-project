function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this. cgpa = cgpa;
    this.lang = lang;

    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Anisul Islam", 23, 3.44, ["bangla", "english"]);
var student2 = new Student("Roib Islam", 23, 3.44, ["bangla", "english"]);
var student3 = new Student("Rabeya Islam", 23, 3.44, ["bangla", "english"]);
var student4 = new Student("Firoj Islam", 23, 3.44, ["Bangla", "English"]);
    
student1.display();
student2.display();
student3.display();
student4.display();