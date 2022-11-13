const Computer = function (name, model) {
    this.name = name;
    this.model = model;

    this.aboutCompute = function () {
        console.log(`This computer name is ${this.name} and model is ${this.model}`);
    }
}

const asus = new Computer("ASUS", "Vivobook");
console.log(asus);
asus.aboutCompute();

// Four rules of Function Constructor
//     1. Create an empty object {}
//     2. Function is called this = {}
//     3. {} linked to the prototype
//     4. {} will return automatically



