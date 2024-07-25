const user = require("../schema/userSchema");



    async function findUser(parameter){
        console.log("inside repo");
        try{
        const responce = await user.findOne({...parameter})
        console.log("Responce from findUser "+responce)
        return responce;
        }
        catch(err){
            console.log(err);
            throw { reason: "Database query failed", statusCode: 500, error: err };
        }
    }

    async function createUser(userDetail){
        try{
        const responce = user.create(userDetail)
        console.log(responce);
        return responce;
        }
        catch(error){
            console.log(error);
        throw { reason: "Failed to create user", statusCode: 500, error: error };
        }
}


module.exports = {
    findUser,
    createUser
}