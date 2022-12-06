//factory function
function createCar(color,brand) {
    return {
        color:color,
        brand:brand,
        start:function(){
            console.log("Started");
        }
    };
}

let car1 = createCar("Audi","white");
let car2 = createCar("BMW","Balck");
let car3 = createCar("TATA","Red");

console.log(car1);
console.log(car2);
console.log(car3);

//constructor function
function Car(color,brand) {
        this.color=color,
        this.brand=brand,
        this.start = function(){
            console.log("Started");
        };
}

let car01 = new Car("Audi","white");
let car02 = new Car("BMW","Balck");
let car03 = new Car("TATA","Red");

console.log(car01);
console.log(car02);
console.log(car03);
