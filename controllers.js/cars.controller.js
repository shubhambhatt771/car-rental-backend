const mongoose = require('mongoose');
const CarModel = require('../models/car.model');
const inventoryModel = require('../models/inventory.model');
const InventoryModel = require("../models/inventory.model")
exports.getCars = async (req, res) => {
    const cars = await CarModel.find({}).populate({ path: 'inventory', select: 'in_stock', select: '-_id' });
    res.status(200).json(cars);
}

exports.getCar = async (req, res) => {
    const { params: { id } } = req;
    const car = await CarModel.findById(id).populate({ path: 'inventory', select: 'in_stock', select: '-_id' });
    return res.status(200).json(car);
}

exports.rentCar = async (req, res) => {
    const { body: { model, in_stock } } = req;
    const result = await inventoryModel.findOneAndUpdate({ model }, { in_stock }, { new: true })
        .then(resp => res.json({ car: resp }))
}