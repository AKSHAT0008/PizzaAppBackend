const express = require('express')
const config = require('./config/config.js');
const DBconnect = require('./config/dbConfig.js');
const user = require('./schema/userSchema.js');
// const bodyParser = require("body-parser")
const app= express();

app.use(express.json())
app.use(express.text())
app.post("/ping",(req,res)=>{
    console.log(req.body);
    
    return res.json({message:"pong"});
})


async function createUser(){
    try {
    const newUser = await user.create({
      firstname: 'Akshat',
      lastname: 'Gupta',
      mobileNumber: 1234567691,
      email: 'gakshat094@gmail.com',
      password: 'Akshat@08'
    });
    console.log('User created:', newUser);
  } catch (err) {
    console.error('Error creating user:', err.message);
  }}
app.listen(config.PORT,async ()=>{
    await DBconnect();
    console.log("Server started at PORT"+config.PORT);
    await createUser();
})

//write it in package.json under scripts and to start server use cmd "npm start"
//"start": "npx nodemon src/index.js"

