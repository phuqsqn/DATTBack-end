const { string, number } = require('joi');
const mongoose = require('mongoose');

const oderSchema = mongoose.Schema(
    {
        customer_name: {
            type: String,
            require: true,
        },
        phone: {
            type: Number,
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
        pay_ment: {
            type: String,
            enum: ["On Delivery"],
            default: "On Delivery"
        },
        is_payment: {
            type: Number,
            enum: [0, 1],
            default: 0,
        },
        cart: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "cart",
            require: true,
        },
        accounts: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "accounts"
        }
    },
    {
        timestamps: true,
        versionKey: false,
    },

);

module.exports = mongoose.model('oder', oderSchema);