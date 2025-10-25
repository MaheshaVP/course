//call back

function sayHello(name){
    console.log(`Hello ${name}`);
}

function sayHii(name, callback) {
    console.log(`Hii ${name}`);

    setTimeout(()=>{
        callback("Karthik");  // or we can pass name
    },1000);
}

sayHii("Mahi",sayHello);

//promises

const promiseEx = new Promise((resolve,reject) => {
    
    setTimeout(()=> {
        let flag = true;
        if(flag){
            resolve("Data resolved");
        }else{
            reject("Data rejected");
        }
    },2000);
});

// promiseEx.then(value => {console.log(value)}).catch(value => {console.log(value)});

//async await
async function exampleFunction() {
    let result = await promiseEx;
    console.log(result);
}

exampleFunction();