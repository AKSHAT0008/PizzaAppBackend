
    //a constructor which takes object of userRepo which contains a funtion to findUser if exists

const { findUser, createUser } = require("../repositories/userRepositoy")

    

    //below is the function to register user
    //it takes userDetail (an object) which contain details of user as per schema defined
    //instead of object as parameter it can also take different detail as individual parameter but it may increase the size of parameters passed
  async function userServices(userDetails){
    console.log("Hitting service layer")
    //1. if email or phone already exist display message
   const user = await findUser({
    email : userDetails.email,
    mobileNumber: userDetails.mobileNumber,
   })
   console.log("user is: "+user);
   if(user){
    console.log("User found with detail: "+user);
    throw{reason:"phone or email already exist", statusCode:400}
   }
    //2. otherwise create new user 
   else{
    console.log("creating new user");
    const newUser = await createUser({
        email: userDetails.email,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        password: userDetails.password,
        mobileNumber: userDetails.mobileNumber,
        role: userDetails.role
    })
    console.log("New user created as: "+ newUser)
    if(!newUser)
        throw({reason:"Something went wrong",statusCode:500})
   
    //3. return detail
    return newUser;
   }
    
}
module.exports = {
    userServices
} 