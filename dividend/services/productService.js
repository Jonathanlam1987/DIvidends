const product = require('../models/product.js');

function createProduct(fields) {
    return new Product(fields).save();
}

function listProducts() {
    return product.find().setOptions({ lean: true }).exec();
}

module.exports = {
    createProduct,
    listProducts
}