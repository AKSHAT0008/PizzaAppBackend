const express = require('express');
const createUser = require('../controller/userController');
// We have to initialise a router object to add routes in a new file
// Routers are used for segregating your routes in different modules
const userRoute = express.Router();
// this is a route registration which calls createUser function from userController 
userRoute.post('/',createUser)

module.exports = userRoute;