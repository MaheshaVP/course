//map
const nums = [1,2,3,4];
const double = nums.map(num => num * 2);

console.log(double);

//Destructuring
const vehicles = ['car','truck','suv'];
const [a,b,c] = vehicles;
console.log(c)

//date 
function dateinfo(date){
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getYear();

    return[d,m,y];
}

const [date,month,year] = dateinfo(new Date());
console.log(`${date}/${month}/${year}`);

//destructure objects
const person = {
    fname : "Mahesh",
    lname : "babu",
    age : 22
}

const {fname,lname,age} = person;
console.log(fname+" "+lname);


