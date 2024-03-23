class Vehicle {
    #parts = {}
    constructor(type, model, parts, fuel) {
        this.type = type
        this.model = model
        this.parts = parts
        this.fuel = fuel
        this.parts.quality = parts.engine * parts.power
    }
    // set parts(value) {
    //     this.#parts = {
    //         engine: value.engine,
    //         power: value.power,
    //         quality: value.engine * value.power,
    //     }
    // }
    //
    // get parts() {
    //     return this.#parts
    // }

    drive(amount) {
        this.fuel -= amount
    }
}


let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);