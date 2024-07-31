const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    items: [{
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
            required: true,
        },
        quantity:{
            type: Number,
            default: 1,
            
        }
    }],
    totalPrice:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        default:'ORDERED',
        enum: ['ORDERED','PREPARING','DELIVERED','OUT_FOR_DELIVERY','DELAYED','EARLY','CANCELLED']
    },
    paymentMethod:{
        type: String,
        default: 'CASH',
        enum:['ONLINE','CASH']
    }

},
{
    timestamps:true
})

const order = mongoose.model('order',orderSchema)
module.exports = order;
