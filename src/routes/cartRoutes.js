const express = require('express');
const { isLoggedIn } = require('../validation/authvalidation');
const { cartController } = require('../controller/cartController');

const cartRoute = express.Router();

cartRoute.get('/', isLoggedIn, cartController)
module.exports = cartRoute;