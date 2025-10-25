let a = 2;
const b = 4;
var c = 6;

console.log(a,b,c)

//array
const arr1 = [1,2,3];
let [m,n,o] = arr1;
console.log(m,n,o)

//fulction
function add(a,b) {
    return a+b;
}
let sum = add(2,4);
console.log(`the result is ${sum}`); //template literals

//arrow function
const addarrow = (a,b,c) => a+b+c;
let add1 = addarrow(2,3,4);

console.log(`Sum of three num is ${add1}`); 


//Default
function hello(name = "boss"){
    console.log(`Hello ${name}`);
}
hello("Mahi")

//Spread
const array = [1,2,3,4];
const array2 = [...array,5,6,7,8];
console.log('array is',array2);


//Rest
function mul(...nums){
    let temp = 1;
    for (let i of nums) {
        temp = temp * i;
    }
    return temp;
}
let multiple = mul(2,3,4,5);
console.log(multiple)

