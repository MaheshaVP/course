//discount declare using class
class product {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    applyDiscount(discount) {
        this.price = this.price - (this.price * discount/100);
    }
}

const laptop = new product("Lenovo",40000);
laptop.applyDiscount(20);
console.log(laptop.price);

//map using for job api
const jobs = [
    {title:"Frontend Developer", salary:30000},
    {title:"Backend Developer", salary:60000},
    {title:"data analyst", salary:800000}
]
const jobtitle = jobs.map(job => job.title+" "+ job.salary);
console.log(jobtitle);

//arrow for jobs apply
const handleApply = (jobtitle) => {
    console.log(`applied to the job of ${jobtitle}`)
}

handleApply("data analyst");

//update applicant details
const Applicant = {name:"Mahesh",age:24};
const updateApplicant = {...Applicant,skills:"python, react.js"};
console.log(updateApplicant);

//used to fetch API destructure
const Applicant1 = {name:"mahi",email:"mahi@gmail.com",age:22,location:"banglore"};
const {name,email} = Applicant1;
console.log(name , email);

//ternary in buttons login
const isLogin = true;
const message = isLogin ? "Welcome mahesh" : "Please login again";
console.log(message);