// function add() {
//     return a+b;
// }
// let a = 4;
// let b=5;
// console.log("add "+add(a,b));

// let a =10;
// let b =20;
// let sum = a+b;
// console.log(sum);


function getMax(a,b) {
    if(a>b) {
        return a;
    }else{
        return b;
    }
   
}
// a=5,b=2,c=7
function getMaxOfThree(a,b,c){
   if(a>b){
    return getMax(a,c);
   }else{
    return getMax(b,c);
   }
}

console.log("result : "+getMaxOfThree(2,3,6))

function maxOfThree(a,b,c){
    temp = getMax(a,b);
    return getMax(temp,c);
}

function getMaxofFour(a,b,c,d) {
    temp = getMax(a,b);
    // return getMaxOfThree(temp,c,d)
    temp1= getMax(temp,c);
    return getMax (temp1,d)
}

let w=10;
let x=20;
let y=30;
let z=40;
// console.log("maximum is : " + getMaxofFour(w,x,y,z));


//min
getMin=(a,b)=>{
    if(a<b){
        return a;
    }else{
        return b;
    }
}

console.log("min : "+ getMin(6,3));


//array
// function getMaxFromArray(arr){
// let temp = arr[0];
//  for(let i=1;i<arr.length;i++){
//     temp = getMax(temp,arr[i]);
// }
// return temp;
// }

getMaxFromArray=(arr)=>{
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

let array = [1,2,3,4,5,9,61,2];
console.log("numbers :" + getMaxFromArray(array));


//-------------------------------------------------------
//Even or Odd
function evenOdd(n) {
    if(n%2 == 0){
        return  n+' is even';
    }else{
        return n + ' is odd';
    }
}

let m = 5;
//console.log('Check : ' + evenOdd(m));


//-------------------------------------------------------------
//prime or not

function primeOrNot(f) {
    if(f<2) 
        return false;
    for(let i=2;i<Math.sqrt(f);i++){
        if(f % i === 0){
            return 'not prime';
        }else{
            return f + " is prime";
        }
    }
}
let e = 11;
//console.log(primeOrNot(e))


//-------------------------------------------------

/* statement  input :[4,4,1,2,2,3,3,5,5,6,6,2,1]
0 < n < 100;
output : print each number count.
4 -> 2
1-> 2
2 ->3
*/

let array1 = [4,4,1,2,2,3,3,5,5,6,6,2,1];

function sameNums(arr) {
    for(let i=0; i<arr.length; i++){
        let current = arr[i];
        let count = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[j]==current){
                count++;
            }
        }
        console.log(current + " -> " + count);
    }
}

sameNums(array1);


