const express = require('express');
const {productController, deleteProductControllerbyID} = require('../controller/productController');
const upload = require('../multerMiddleware/multerMiddleware');
const {productControllerbyID} = require('../controller/productController');
// We have to initialise a router object to add routes in a new file
// Routers are used for segregating your routes in different modules
const productRoute = express.Router();
// this is a route registration which calls productController function from productController 
productRoute.post('/',upload.single('productImage'),productController)
productRoute.get('/:id',productControllerbyID)
productRoute.delete('/delete/:id',deleteProductControllerbyID)

module.exports = productRoute;