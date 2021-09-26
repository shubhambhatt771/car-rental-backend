const router = require('express').Router();
const { getCars, rentCar, getCar } = require('../controllers.js/cars.controller');
router.get('/get', getCars);
router.post('/rent', rentCar);
router.get('/:id', getCar);
module.exports = { router };