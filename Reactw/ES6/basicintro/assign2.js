//----------------------------------
//Even Odd
function isEvenOdd(n) {
    if(n% 2 == 0){
        console.log(n + " is even number")
    }else{
        console.log(n + " is odd number")
    }
}

let array = [20,38,21,45,50];

function CheckEvenOdd(arr) {
    for(let i=0;i<arr.length;i++){
        isEvenOdd(arr[i])
    }
}

// CheckEvenOdd(array);


//----------------------------------------------
//Prime or not

// let x = 5;

function isPrime(n) {
    if(n %2 == 0 || n%3 == 0 || n%5 == 0) {
        console.log(n + " is not prime number");
    }else{
        console.log(n + " is prime number");
    }
} 

// isPrime(x);

let nums = [21,8,9,7,13,24,11,21,25];
checkPrime(nums);

function checkPrime(nums) {
    for(let i=0;i<nums.length;i++){
        isPrime(nums[i])
    }
}
