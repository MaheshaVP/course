console.log("Hello Mahesha");

let a = 10;
console.log(a);

//Types
a = 6;
let b = 8.3;
let c = "Mahi";
let d = true;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

//Type conversions
let e = 2;
let f = String(e);
let g = Boolean(a);
let h = "abc";
let i = "123";
let j = Number(h);
let k = Number(i);

console.log(f);
console.log(g);
console.log(j);
console.log(k);

console.log(typeof(f));

//operators
let m = "mahesh";
let n = "babu";
let o = m + " "+n;
console.log(o);

let  p = 5;
let q = --p - 2;
console.log(q);

//conditions
let u = 3;
let v = 4;
if(u==v){
    console.log("u is equal to v");
}else if(u>v){
    console.log("u is greater")
}else{
    console.log("Not equal and v is greater");
}

//loops
let x=0;
while (x<10+1){
    console.log(x);
    x++;
}


for (let i = 10; i > 0; i--){
    console.log(i)
}