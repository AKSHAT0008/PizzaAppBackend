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
        required: true,
        enum:['veg', 'non-veg','dessert', 'bevrages', 'sides'],

    },
    inStock:{
        required: [true,"In Stock info is mandatory"],
        type: Boolean,
        dafault: true
    }
},{
    timestamps: true
}
)

const product = mongoose.model('product',productSchema);

module.exports = product;