const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    productName:{
        type:String,
        required: [true, 'Product name is mandatory'],
        minlength: [5,'Length should be atleast 5 char long'],
        trim: true
    },
    description:{
        type: String,
        minlength: [5,'Length should be atleast 5 char long'],
    },
    productImage:{
        type: String,

    },
    quantity:{
        type: Number,
        required: true,
        default: 10
    },
    category:{
        type: String,
        required: true,
        enum:['veg', 'non-veg','dessert', 'bevrages', 'sides'],

    },
    inStock: {
        type: Boolean,
        required: true,  
        default: true
    }
},{
    timestamps: true
}
)

const product = mongoose.model('product',productSchema);


module.exports = product;

