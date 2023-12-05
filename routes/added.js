const express = require('express')
const router = express.Router()

const VendorController = require('../controllers/VendorController')
const controllerVendor = new VendorController()

const ColorController = require('../controllers/ColorController')
const controllerColor = new ColorController()

const CategoryController = require('../controllers/CategoryController')
const controllerCategory = new CategoryController

const CoffeeController  = require('../controllers/CoffeeController')
const controllerCoffee = new CoffeeController()

router.post('/vendor',controllerVendor.addVendor)
router.post('/color',controllerColor.addColor)
router.post('/category',controllerCategory.addCategory)
router.post('/coffee',controllerCoffee.addCoffee)

module.exports = router