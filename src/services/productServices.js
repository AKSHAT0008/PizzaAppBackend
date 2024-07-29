const cloudinary = require('../config/cloudinaryConfig');
const {createProduct, deleteProductRepobyID} = require("../repositories/productRepository");
const { productRepobyID } = require("../repositories/productRepository");
const fs = require('fs/promises')
async function productService(productDetail) {

    //If we are recieving image then upload it on the cloudinary
    const imagePath = productDetail.imagePath;
    if (imagePath) {
        try {
            const result = await cloudinary.uploader.upload(imagePath);
            console.log("Result from service is: "+result);
            var imageURL = result.secure_url;
            console.log("img from service is: "+imageURL);
            await fs.unlink(imagePath)
        }
        catch (error) {
            console.error(error);
        }
    }
    const newProduct = await createProduct({
        ...productDetail,
        productImage: imageURL
    })
    console.log("New product created as: "+newProduct);
    if (!newProduct)
        throw { reason: "Unable to create a new Product", statusCode: 500 }

    return newProduct;
}

async function productServicebyID(id){
    try { const productDetail= await productRepobyID(id)
      return productDetail;}
      catch(error){
        throw{ reason: "Failed to load product", statusCode: 400, error: error };
      }
    }
async function deleteProductServicebyID(id){
    try { const productDetail= await deleteProductRepobyID(id)
      return productDetail;}
      catch(error){
        throw{ reason: "Failed to delete product", statusCode: 400, error: error };
      }
    }
module.exports= {productServicebyID,productService, deleteProductServicebyID }
