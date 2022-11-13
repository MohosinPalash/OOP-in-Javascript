const HouseRent = function (rent) {
    this.rent = rent;
}

HouseRent.prototype.rentIncrement = function () {
    this.rent += 2000;
    console.log(this.rent);
}

HouseRent.prototype.rentDecrement = function () {
    this.rent -= 2000;
    console.log(this.rent);
}

const house1 = new HouseRent(15000);
console.log(house1);
house1.rentIncrement();
house1.rentDecrement();