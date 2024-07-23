const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true,"first name is required"],
        minlength: [5,"Should be >=5"],
        maxlength: [20,"Should be <=20"],
        trim: true,
        lowercase:true
    },
    lastname:{
        type: String,
        required: [true,"first name is required"],
        minlength: [5,"Should be >=5"],
        maxlength: [20,"Should be <=20"],
        trim: true,
        lowercase:true
    },
    mobileNumber:{
        type: Number,
        required: [true,"Mobile number is required"],
        maxlength: [10,"Should be <=10"],
        trim: true,
        unique: [true,"Number already in use"]
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        trim: true,
        unique: [true,"Email already in use"],
        // match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$,/,"Please fill valid Email"] //regex
    },
    password:{
        type: String,
        required: [true,"Password is required"],
        minlength: [8,"Should be >=8"],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Invalid"]
    }
},{
    timestamps: true,
}
);
const user =mongoose.model("user",userSchema);
module.exports = user;