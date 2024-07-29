const {productService, productServicebyID, deleteProductServicebyID} = require("../services/productServices");

async function productController(req, res) {

    try {
    //  console.log("Req body is:  "+req.body)
      const product =await productService({
        productName: req.body.productName,
        imagePath: req.file ? req.file.path : null,
        quantity: req.body.quantity,
        category: req.body.category,
        inStock: req.body.inStock,
        description: req.body.description,
      })
      console.log("product controller is:  "+product)
      return res.status(201).json({
        success:true,
        message: "Created Successfully",
        data: product,
        error: {}
      })
    }
    catch (error) {
        console.log("Product controller Error occuring: " + error)
        return res.status(500).json({
          success: false,
          message: "An error occurred",
          error: error.message, 
        });
    }
    
}

async function productControllerbyID(req, res) {
  try {
    const productDetail = await productServicebyID(req.params.id);
    return res.json(productDetail)
  }
  catch (error) {
    res.status(400).json({
      success: false,
      message: "An error occurred",
      error: error.message, 
    })
  }
}
async function deleteProductControllerbyID(req, res) {
  try {
    const productDetail = await deleteProductServicebyID(req.params.id);
    return res.json({
      success: true,
      deleted: true,
      message: "Deleted Successfully",
      Deleted_data: productDetail,})
  }
  catch (error) {
    res.status(400).json({
      success: false,
      message: "Unable to delete",
      error: error.message, 
    })
  }
}
module.exports = {productControllerbyID, productController, deleteProductControllerbyID }
