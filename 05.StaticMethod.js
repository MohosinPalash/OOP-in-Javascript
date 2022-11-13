// STATIC METHOD: Static method can not be accessed by the instances ob and object 
// but it can be accessed by the constructor itself.


class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    aboutComputer() {
        console.log(`This computer name is ${this.name} and model is ${this.model}`);
    }
    static featuresComputer = function () {
        console.log(`This is the features of computer.`)
    }
}

const asus = new Computer("ASUS", "Vivobook");
console.log(asus);

asus.aboutComputer()
//The following line will show an error as static method can not be accessed by instances.
// asus.featuresComputer()

//BUT this will work perfectly because static method can be accessed by the class itself.
Computer.featuresComputer()