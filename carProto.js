/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
        this.accelerate = () => {
            this.currentSpeed++;
        }
        this.brake = () => {
            this.currentSpeed--;
        }
    }
    accelerate = () => {
        this.currentSpeed++;
    }
    brake = () => {
        this.currentSpeed--;
    }
    toString() {
        return `Model: ${this.model} going at ${this.currentSpeed} mile per hour!`;
    }
}

const porsche = new Car('porsche');
porsche.accelerate();
porsche.accelerate();
porsche.brake();
console.log(porsche.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
//Accelerates twice as fast because electric 
class ElectricCar {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
        this.accelerate = () => {
            this.currentSpeed += 2;
        }
        this.brake = () => {
            this.currentSpeed--;
        }
    }
    accelerate = () => {
        this.currentSpeed++;
    }
    brake = () => {
        this.currentSpeed--;
    }
    toString() {
        return `Model: ${this.model} going at ${this.currentSpeed} mile per hour!`;
    }
}

const rivian = new ElectricCar('Rivian');
rivian.accelerate();
rivian.accelerate();
rivian.brake();
console.log(rivian.toString());

