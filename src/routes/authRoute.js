//contains login route
const express = require('express');
const login = require('../controller/authController');
// We have to initialise a router object to add routes in a new file
// Routers are used for segregating your routes in different modules
const authRoute = express.Router();
// this is a route registration which calls createUser function from userController 
authRoute.post('/',login)

module.exports = authRoute;