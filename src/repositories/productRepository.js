const product = require('../schema/productSchema')


function createProduct(productDetail){
    try{
        const responce = product.create(productDetail)
        console.log(responce);
        return responce;
        }
        catch(error){
            console.log(error);
        throw { reason: "Failed to create product", statusCode: 500, error: error };
}}

async function productRepobyID(id){
    try{const productByID = await product.findById(id)
    return productByID;}
    catch(error){
       console.log(error);
         throw{ reason: "Failed to load product", statusCode: 400, error: error };
    }
 }
async function deleteProductRepobyID(id){
    try{const productByID = await product.findByIdAndDelete(id)
    return productByID;}
    catch(error){
       console.log(error);
         throw{ reason: "Failed to delete product", statusCode: 400, error: error };
    }
 }
 
 module.exports= {productRepobyID, createProduct, deleteProductRepobyID}

