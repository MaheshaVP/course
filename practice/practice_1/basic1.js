//objects
let laptop = {
    "Brand name" : "lenovo",
    size : 4,
    color : "Gray"
}

console.log(laptop);
console.log(typeof(laptop));

console.log(laptop["Brand name"]);
console.log(laptop.color);

var color1 = laptop.color;
console.log(color1);

console.log("\n")


//class
class Student {
    constructor(name,age,section){
        this.name = name
        this.age = age
        this.section = section
    }
}

var std1 = new Student("Mahesh",22,"BCA");

var std2 = new Student("Chethan",24,"MCA");

console.log(std1);
console.log(std2);

console.log(std2.section);
