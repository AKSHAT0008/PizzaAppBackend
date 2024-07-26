const multer  = require('multer')
const path = require('path')
const storage = multer.diskStorage({ 
    destination: function(req,res, next){
        next(null,'uploads/')
    },
    filename: function(req,file,next){
        console.log(file);
        next(null,`${Date.now()}${path.extname(file.originalname)}`)
    }
})

    const upload = multer({storage: storage})


    module.exports = upload;