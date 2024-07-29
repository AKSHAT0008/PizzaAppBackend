const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    items:[{
      product:{  
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "product"
        },
      quantity:{
        type: Number,
        default: 1
      }
    }]
},{
timestamps: true
})

const cart = mongoose.model("cart",cartSchema)
module.exports = cart;