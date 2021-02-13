const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    const km = (this.speed +=10)
    console.log(km);
}

Car.prototype.break = function () {
    const km = (this.speed -= 5);
    console.log(km);
}

const bmw = new Car('BMW', 200);
console.log(bmw);
bmw.accelerate();
bmw.break();

const mercedes = new Car('Mercedes', 245);
console.log(mercedes);
mercedes.accelerate();
mercedes.break();