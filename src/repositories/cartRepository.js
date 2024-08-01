
const cart = require("../schema/cartSchema");


async function createCart(userID){
   
  try {  await cart.create({
        user: userID
    })
    
}
    catch(error){
        console.log("Failed to create cart:- "+ error);
        throw{ message:'Cannot create cart',statusCode: 500, error: error }
    }
}

async function getCartByUserID(userID){
    try {
        const cartFound = await cart.findOne({
            user: userID
        })
        return cartFound
    } catch (error) {
        console.log("Failed to find cart:-  " +error);
        throw{ message:'Cannot find cart',statusCode: 500, error: error }
    }
}
 
module.exports={
    createCart, getCartByUserID
} 