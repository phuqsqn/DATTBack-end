const mongoose = require('mongoose');
const cartModel = require('../model/cart.model');

module.exports = {
  addToCart: async (req, res) => {
    const account = req.account;
    const { id_product, quantity } = req.body;

    const oldCart = await cartModel.findOne({
      account: account._id,
      isOrder: 0,
    });
    let newCart;
        if(oldCart === null){
          newCart = await cartModel.create({
            account: account._id,
            items: [{ product: id_product, quantity: quantity || 1 }],
          });
        }
    let index ;
      
    if(!oldCart){
      index = -1 
    }else{
      index = oldCart.items.findIndex(v=> v.product == id_product);
    }
    if (!oldCart) {
      //nếu giỏ hàng k tồn tại thì tạo mới
      newCart = await cartModel.create({
        account: account._id,
        items: [{ product: id_product, quantity: quantity || 1 }],
      });
    } else if (index > -1) {
        oldCart.items[index].quantity += quantity;
        newCart = await cartModel.findOneAndUpdate(
            {
              account: account._id,
              isOrder: 0,
            },
            {
              items: [
                ...oldCart.items,
              ],
            },
            {
              new: true,
            },
          );
    } else {
      //nếu giỏ hàng đã tồn tại, thì update mảng items (thêm product vào items)
      newCart = await cartModel.findOneAndUpdate(
        {
          account: account._id,
          isOrder: 0,
        },
        {
          items: [
            ...oldCart.items,
            { product: id_product, quantity: quantity || 1 },
          ],
        },
        {
          new: true,
        },
      );
    }

    return res.status(200).json(newCart);
  },
  getCart: async (req, res) => {
    const account = req.account;
    const carts = await cartModel.findOne({
      account: account._id,
      isOrder: 0,
    }).populate("items.product");  //giống left join sql
     if(carts === null){
      
     }
    return res.status(200).json(carts);
  },
  deleteItemCart: async(req, res) =>{
    const account = req.account;
    const id_product = req.params.id_product;
    console.log(id_product);
    const cart = await cartModel.findOne({
        account: account._id,
        isOrder: 0
    });
    
    const cacSanPhamConLai = cart.items.filter(v=> v.product != id_product);

    const newCart = await cartModel.findOneAndUpdate(
        { account: account._id, isOrder: 0 },
        { items: cacSanPhamConLai },
        { new: true },
    );

    return res.status(200).json(newCart);
  }
};
