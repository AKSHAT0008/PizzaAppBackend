const { authServices } = require("../services/authServices");

async function login(req,res){
    console.log("Auth controller")
    console.log(req.body);
   try{
        const responce = await authServices(req.body)
        console.log(responce)
        res.cookie("authToken",responce,{
            httpOnly:true,
            secure:false,
            maxAge: 7*24*60*60*1000
        })
    return res.status(200).json({
        message:'SuccessFully user Logined',
        success: true,
        error:{},
        data: {},
    })
    }
    catch(error){
       return res.status(error.statusCode).json({
            seccess: false,
            data:{},
            message:error.reason,
            error: error
        })
    }
}

module.exports = login;