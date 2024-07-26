const express = require('express')
const config = require('./config/config.js');
const DBconnect = require('./config/dbConfig.js');
const userRoute = require('./routes/userRoute.js');
const authRoute = require('./routes/authRoute.js');
const cookieParser = require('cookie-parser');
const isLoggedIn = require('./validation/authvalidation.js');
const upload = require('./multerMiddleware/multerMiddleware.js');
const cloudinary = require('./config/cloudinaryConfig.js');
const fs = require('fs/promises')
// const user = require('./schema/userSchema.js');  

const app= express();

app.use(express.json());
app.use(express.text());
app.use(cookieParser());
 
app.use('/user',userRoute);
app.use('/login',authRoute);
app.post("/ping",isLoggedIn,(req,res)=>{
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message:"pong"});
})
app.post('/photo',upload.single('photo'),async (req,res)=>{
    
    try{
     console.log("File is: "+JSON.stringify( req.file, null, 2));   
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log("Result from cloudinary:  "+JSON.stringify( result, null, 2));
    await fs.unlink(req.file.path)
     }
    catch(error){
        console.log("Error occuring: "+ error)
        console.error(JSON.stringify(error, null, 2));
    }
    res.json({
        message:'ok'
    })
})

//sample user below 
// async function createUser(){
//     try { 
//     const newUser = await user.create({
//       firstname: 'Akshat', 
//       lastname: 'Gupta',
//       mobileNumber: 1234569691,  
//       email: 'gakshat094@gmail.com',
//       password: 'Akshatt@08' 
//     });
//     console.log('User created:', newUser); 
//   } catch (err) {
//     console.error('Error creating user:', err.message);
//   }}
app.listen(config.PORT,async ()=>{
    await DBconnect();
    console.log("Server started at PORT "+config.PORT);
    // await createUser();
})

//write it in package.json under scripts and to start server use cmd "npm start"
//"start": "npx nodemon src/index.js"

 