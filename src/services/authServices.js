const { findUser, createUser } = require("../repositories/userRepositoy")
const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken');  
const { SECRET_KEY, JWT_EXPIRE } = require("../config/config");

    //below is the function to check authenticity of the user(login)
   
  async function authServices(authDetails){

    console.log("Hitting auth service layer")
    const plainPassword = authDetails.password;
    //1. if email do not already exist display message
   const user = await findUser({
    email : authDetails.email, //find user with given email
   })
   if(!user){
    throw{reason:"Email do not exist", statusCode:404} //error
   }
   
    //2. compare plain and hashed pwd
   
    const hashedPassword = user.password;
    const isPasswordValid = await bcrypt.compare(plainPassword,hashedPassword)
    
    if(!isPasswordValid)
        throw({reason:"Invalid Password",statusCode:401})
   
    //3. if valid create and send token
    const userRole = user.role? user.role: 'USER'
    const token = jwt.sign({email: user.email, id: user._id, role: userRole},SECRET_KEY,{
        expiresIn: JWT_EXPIRE
    })
   
    return token;
}
module.exports = {
    authServices
}