const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, subtype: 'double' },
    image: { type: String },
    material: { type: String, required: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    tags: [{
        type: String,
    }],
    stockQuantity: {
        type: Number,
        required: true,
        min: 0
    }
})

const Products = mongoose.model('Products', productSchema)

module.exports = Products;
