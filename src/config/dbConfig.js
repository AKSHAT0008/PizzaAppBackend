const mongoose = require('mongoose')
const config = require('./config.js')

async function DBconnect() {
    try {
      await  mongoose.connect(config.DB_URL);
      console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Not connected "+error);
    }
}

module.exports=DBconnect;
