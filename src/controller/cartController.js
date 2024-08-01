const { cartServices } = require("../services/cartServices")


async function cartController(req, res) {
    try {
        console.log("Fetching cart for user ID:", req.user);
        const cartFound = await cartServices(req.user.id)
        return res.status(200).json({
            success: true,
            message: "Successfully fetched the cart",
            error: {},
            data: cartFound
        })
    }
    catch (err) {
        console.log("Error in controller:  " + err)
        return res.status(500).json({
            success: false,
            message: "NO cart found for this user",
            error: err,
            data: {}
        })
    }
}

module.exports = {
    cartController
}   