// Encapsulation means making some parameter and methods private 
// It can not be accessed outside the class where it is not defined
//write the name of private parameters name first before writing in constructor
// Put a # symbol before the name of parameter and method before working with it

class Computer {
    //Private Field
    #warranty
    constructor(name, model, warranty) {
        this.name = name;
        this.model = model;
        this.#warranty = warranty;
    }

    aboutComputer() {
        this.#aboutWarranty();
        console.log(`This computer name is ${this.name} and model is ${this.model}`);
    }

    //Private Method
    #aboutWarranty() {
        console.log(`The warranty is ${this.#warranty} years.`);
    }
}

const asus = new Computer("ASUS", "Vivobook", 5);
console.log(asus.name);
console.log(asus.model);
// This following will show undefined as it is private
console.log(asus.warranty);

//Similarly, this will also show an error as aboutWarranty()  method is a private method
// asus.aboutWarranty();
//BUt this will work fine.
asus.aboutComputer();
console.log(asus);