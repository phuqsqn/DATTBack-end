const commentModel = require('../model/comment.model');
// const commentValid = require('../validations/comment.valid')
module.exports = {
  creatComment: async (req, res, next) => {
    const product_id = req.params.product_id;
    const body = req.body
    // const {error , value} = commentValid(body)
    // if (error){
    //     return res.status(400).json({
    //       statusCode: 400,
    //     message: error.message,
    //     });
    // }
    body.product = product_id;
    const newComment = await commentModel.create(body);
    return res.status(201).json(newComment); 
  },
  getComment: async (req, res, next) => {
    const product_id = req.params.product_id;
    const products = await commentModel.find({
      product: product_id,
    });
    return res.status(200).json(products);
  },
  updateComment: async (req, res, next) => {
    const id = req.params.id;
    const body = req.body; 
    const updateCm = await commentModel.findByIdAndUpdate(id, body, {  
      new: true,
    });
    return res.status(200).json(updateCm);
  },
  deleteComment: async (req, res, next) => {
    const id = req.params.id; 
    const deleteCm = await commentModel.findByIdAndDelete(id);
    return res.status(200).json(deleteCm);
  },
};
