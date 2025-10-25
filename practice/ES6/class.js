//class
class Car{
    constructor(name){
        this.name = name;
    }
}
const myCar = new Car("Ford");
console.log(myCar.name);

//class method
class Car1{
    constructor(name) {
        this.brand = name;
    }
    present(){
        return `The brand is ${this.brand}`;
    }
}

const myCar1 = new Car1("Belano");
console.log(myCar1.present());

//class inheritance
class Car2{
    constructor(name){
        this.brand = name;
    }
    present(){
        return `This is `+ this.brand;
    }
}

class Model2 extends Car2{
    constructor(name,mod){
        super(name);
        this.model = mod;
    }
    show(){
        return `${this.present()} and this is ${this.model}`;
    }
}

const myCar2 = new Model2("Ford","Mustag");
console.log(myCar2.show());
