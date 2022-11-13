//Polymorphism is about over writing a method
//The method in parent class can be over written in child class
//The latest method will be final method
//All the child class can over write the methods of parent class.
class Computer {
    constructor(name, model, color) {
        this.name = name;
        this.model = model;
        this.color = color;
    }

    aboutComputer() {
        console.log(`This computer name is ${this.name} and model is ${this.model}`);
    }
}


class HP extends Computer {
    constructor(name, model, color) {
        super(name, model, color);
    }
    //Over written method
    aboutComputer() {
        console.log(`This computer name is ${this.name} and model is ${this.model} and the color is ${this.color}.`);
    }
}

const hp1 = new HP("HP", "ASF_09X", "Black");
console.log(hp1);
hp1.aboutComputer();