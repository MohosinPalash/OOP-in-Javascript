class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    aboutComputer() {
        console.log(`This computer name is ${this.name} and model is ${this.model}`);
    }
}


class HP extends Computer {
    constructor(name, model, warranty) {
        super(name, model);
        this.warranty = warranty;
    }
    warrantyCard() {
        console.log(`You are provided with ${this.warranty} years of warranty.`);
    }

    useComputer(value) {
        console.log(`${(this.warranty * 12) - (value)} months warranty remaining.`);
    }
}

const hp1 = new HP("HP", "Vivobook", 5);
console.log(hp1);
hp1.useComputer(6);

