class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    aboutComputer() {
        console.log(`This computer name is ${this.name} and model is ${this.model}`);
    }
}

const asus = new Computer("ASUS", "Vivobook");
console.log(asus);