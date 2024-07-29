const { userServices } = require("../services/userServices");

async function createUser(req,res){
    console.log("User controller")
    console.log(req.body);
   try{
        const responce = await userServices(req.body)
        console.log("responce: "+responce)
    return res.json({
        message:'Successfully user registered',
        success: true,
        error:{},
        data: responce,
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

module.exports = createUser;