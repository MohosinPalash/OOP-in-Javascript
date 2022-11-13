const Computer = {
    name: "",
    model: "",

    aboutComputer() {
        console.log(`This computer name is ${this.name} and model is ${this.model}`);
    }
}

let asus = Object.create(Computer);
console.log(asus);

asus.name = "ASUS";
asus.model = "Vivobook";
asus.aboutComputer();

console.log(asus);
