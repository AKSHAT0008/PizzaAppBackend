const dotenv = require('dotenv')
dotenv.config()
module.exports={
     PORT : process.env.PORT,
     DB_URL : process.env.DB_URL,
     SECRET_KEY: process.env.SECRET_KEY,
     JWT_EXPIRE: process.env.JWT_EXPIRE
    }