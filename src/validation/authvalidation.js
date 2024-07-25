const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/config");

async function isLoggedIn(req,res,next){
    const token = req.cookies["authToken"];
    if(!token){
        res.status(401).json({
            success: false,
            data: {},
            error: "Not authenticated",
            message: "No Auth Token provided"
        })
    }
    const decoded = jwt.verify(token,SECRET_KEY);

    if(!decoded){
        res.status(401).json({
            success: false,
            data: {},
            error: "Not authenticated",
            message: "Invalid Token provided"
        })
    }

    // if reached here, then user is authenticated allow them to access the api

    req.user={
        email:decoded.email,
        id:decoded.id
    }
    next()
}

module.exports = isLoggedIn;