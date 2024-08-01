const { getCartByUserID } = require("../repositories/cartRepository")

async function cartServices(userID) {
    const cartFound = await getCartByUserID(userID)
    if (!cartFound) {
        throw { reason: "No cart found with given ID", statusCode: 400, error: error }
    }
}
module.exports = {
    cartServices
}