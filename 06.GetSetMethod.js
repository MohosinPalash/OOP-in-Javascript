
class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    aboutComputer() {
        console.log(`This computer name is ${this.name} and model is ${this.model}`);
    }


    get computerName() {
        return this.name;
    }
    set computerName(value) {
        this.name = value;
    }
}

const asus = new Computer("ASUS", "Vivobook");
console.log(asus);

console.log(asus.computerName);

asus.computerName = "HP";

console.log(asus);
console.log(asus.computerName);