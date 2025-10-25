//function
hello = function() {
    return "hello world";
}
console.log(hello());

//arrow
hello = () => {
    return 'Good morning';
}
console.log(hello());

//args in val
hello = (val) => {
    return 'love '+ val;
}
console.log(hello('you'));


//variables
var x = 4.5;     //global
let y = 8;       //block
const z = 5;     //block

console.log(x,y,z);

