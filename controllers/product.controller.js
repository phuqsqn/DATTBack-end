const productModel = require('../model/product.model');
const productValid = require('../validations/product.valid')
module.exports = {
  creatProduct: async (req, res, next) => {
    const category_id = req.params.category_id;
    const body = req.body
    const {error , value} = productValid(body)
    if (error){
        return res.status(400).json({
          statusCode: 400,
        message: error.message, 
        });
    }
    body.category = category_id;
    const newProduct = await productModel.create(body);  
    return res.status(201).json(newProduct);
  }, 
  getProduct: async (req, res, next) => { 
    const category_id = req.params.category_id;
    const category = await productModel.find({
      category: category_id,
    });
    return res.status(200).json(category);
  },
  getAllProduct: async(req, res) => {
    const categories = await productModel.find();
    return res.status(200).json(categories);
  },
  updateProduct: async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    const updatePro = await productModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json(updatePro);
  },
  deleteProduct: async (req, res, next) => {
    const id = req.params.id;
    const deletePro = await productModel.findByIdAndDelete(id);
    return res.status(200).json(deletePro); 
  },
}; 
