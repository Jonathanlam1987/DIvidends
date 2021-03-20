

const db = require('../db.js')
const { createProduct } = require('../services/products.js');
const products = require('../products.json');

(async function () {
for (products of products) {
    await createProduct(products);
   }
   db.disconnect();
})();

