const oderModel = require('../model/oder.model')
const cart = require('../model/cart.model');
const cartModel = require('../model/cart.model');

module.exports = {
    getOder: async (req, res) => {
        const account_id = req.query.account_id;
        const status = req.query.status;
        const bodyQuery = {};
        if (account_id) {
            bodyQuery.account = account_id;
        }
        if (status) {
            bodyQuery.status = status
        }
        const orders = await oderModel.find(bodyQuery).populate({
            path: 'cart',
            populate: {
                path: 'items.product'
            }
        });
        return res.status(200).json(orders)
    },
    creatOder: async (req, res) => {
        const body = req.body;
        const cart_id = body.cart;
        await cartModel.findByIdAndUpdate(cart_id, { isOrder: 1 });
        const oder = await oderModel.create(body);
        return res.status(201).json(oder)
    },
    updateOder: async (req, res) => {
        const id =  req.params.id
        const body = req.body;
        const updateOder = await oderModel.findByIdAndUpdate(id, body, {
            new: true,
          });
          return res.status(200).json(updateOder);

    },
    deleteOder: async (req, res) => {
        const oder_id = req.params.id;
        console.log(oder_id)
        const deleteOder = await oderModel.findByIdAndDelete(oder_id);
        return res.status(200).json(deleteOder);
    }
};