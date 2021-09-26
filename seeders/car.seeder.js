const mongoose = require('mongoose');
const CarModel = require('../models/car.model');
const InventoryModel = require('../models/inventory.model');
require('dotenv').config();
const cars = [
    {
        model: 'Volkswage Taigun',
        body_type: 'Suv',
        galleries: ["SUV101.jpeg", "SUV102.jpeg", "SUV103.jpeg"]
    },
    {
        model: 'Hyundai Creta',
        body_type: 'Suv',
        galleries: ["SUV201.jpeg", "SUV202.jpeg", "SUV203.jpeg"]
    },
    {
        model: 'Toyota Fortuner',
        body_type: 'Suv',
        galleries: ["SUV301.jpeg", "SUV302.jpeg", "SUV303.jpeg"]
    },
    {
        model: 'Tata Safari',
        body_type: 'Suv',
        galleries: ["SUV401.jpeg", "SUV402.jpeg", "SUV403.jpeg"]
    },
    {
        model: 'Skoda Kushaq',
        body_type: 'Suv',
        galleries: ["SUV501.jpeg", "SUV502.jpeg", "SUV503.jpeg"]
    },
    {
        model: 'Jeep Compass',
        body_type: 'Suv',
        galleries: ["SUV601.jpeg", "SUV602.jpeg", "SUV603.jpeg"]
    },
    {
        model: 'Hyundai Verna',
        body_type: 'Sedan',
        galleries: ["SED101.jpeg", "SED102.jpeg", "SED103.jpeg"]
    },
    {
        model: 'Honda City',
        body_type: 'Sedan',
        galleries: ["SED201.jpeg", "SED202.jpeg", "SED203.jpeg"]
    },
    {
        model: 'Maruti Suzuki Ciaz',
        body_type: 'Sedan',
        galleries: ["SED301.jpeg", "SED302.jpeg", "SED303.jpeg"]
    },
    {
        model: 'Skoda Rapid TSI',
        body_type: 'Sedan',
        galleries: ["SED401.jpeg", "SED402.jpeg", "SED403.jpeg"]
    },
    {
        model: 'Toyota Yaris',
        body_type: 'Sedan',
        galleries: ["SED501.jpeg", "SED502.jpeg", "SED503.jpeg"]
    },
    {
        model: 'Skoda Octavia',
        body_type: 'Sedan',
        galleries: ["SED601.jpeg", "SED602.jpeg", "SED603.jpeg"]
    },
    {
        model: 'Maruti Suzuki Baleno',
        body_type: 'Hatchback',
        galleries: ["HAT101.jpg", "HAT102.jpg", "HAT103.jpg"]
    },
    {
        model: 'Maruti Suzuki Swift',
        body_type: 'Hatchback',
        galleries: ["HAT201.jpeg", "HAT202.jpeg", "HAT203.jpeg"]
    },
    {
        model: 'Tata Altroz',
        body_type: 'Hatchback',
        galleries: ["HAT301.jpeg", "HAT302.jpeg", "HAT303.jpeg"]
    },
    {
        model: 'Hyundai i20',
        body_type: 'Hatchback',
        galleries: ["HAT401.jpeg", "HAT402.jpeg", "HAT403.jpeg"]
    },
    {
        model: 'Renault Kwid',
        body_type: 'Hatchback',
        galleries: ["HAT501.jpeg", "HAT502.jpeg", "HAT503.jpeg"]
    },
    {
        model: 'Tata Tiago',
        body_type: 'Hatchback',
        galleries: ["HAT601.jpeg", "HAT602.jpeg", "HAT603.jpeg"]
    }
];
const seedData = async () => {
    await mongoose.connect(
        'mongodb+srv://shubham:bunny123@cluster0.bx9f8.mongodb.net/car-rentals?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("database connected"))
        .catch(err => console.log(err));

    for (let i = 0; i < cars.length; i++) {
        newCar = new CarModel({ _id: new mongoose.Types.ObjectId(), model: cars[i].model, body_type: cars[i].body_type, galleries: cars[i].galleries });
        newInventory = new InventoryModel({ _id: new mongoose.Types.ObjectId(), qty: 10, in_stock: 10, model: newCar._id });
        newCar.inventory = newInventory._id;
        await newCar.save();
        await newInventory.save();
    }
    console.log("data added successfully !!");
};
seedData();