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
    try{
    const decoded = jwt.verify(token,SECRET_KEY);

    if(!decoded){
        throw {reason: "Invalid token provided"}
    }

    // if reached here, then user is authenticated allow them to access the api

    req.user={
        email:decoded.email,
        id:decoded.id,
        role: decoded.role,
    } 
    next()}
    catch(error){
        res.status(401).json({
            success: false,
            message: "Invalid Token",
            data: {},
            error: error
        })
    }
}


async function isAdmin(req, res, next){
    const loggedInUser = req.user;
    if(loggedInUser.role =='ADMIN'){
        console.log("User is an Admin");
        next();
    }
    else{
        return res.status(401).json({
            data:{},
            success: false,
            message: "You're not an ADMIN!",
            error:{
                statusCode: 401,
                reason: "Unauthorised user for this action"
            }
        })
    }

}

module.exports = {isLoggedIn, isAdmin};