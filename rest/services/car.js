const Car = require('../models/Car');
const User = require('../models/User');

// get all cars

async function getAllCars() {
    try {
        return await Car.find().lean();
    } catch (err) {
        throw err
    }
}

// create a car

async function createCar(carData) {
    try {
        const car = new Car(carData);
        await car.save();
        return car;
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllCars,
    createCar
}