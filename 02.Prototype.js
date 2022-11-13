console.log(Array.prototype);


const Computer = function (name, model) {
    this.name = name;
    this.model = model;

    // this.aboutComputer = function () {
    //     console.log(`This computer name is ${this.name} and model is ${this.model}`);
    // }
}

Computer.prototype.aboutComputer = function () {
    console.log(`This computer name is ${this.name} and model is ${this.model}`);
}

const asus = new Computer("ASUS", "Vivobook");
console.log(asus);
asus.aboutComputer();


//Filter Modification


Array.prototype.filter = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 0) {
            arr.push(this[i]);
        }
    }
    return arr;
}

console.log([1, 2, 3, 4, 5, 6].filter());