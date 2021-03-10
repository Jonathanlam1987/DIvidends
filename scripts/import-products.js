

const db = require('../db.js')
const { create } = require('../models/products.js');
const products = require('../products.json');

(async function () {
for (products of products) {
    await create(products);
   }
   db.disconnect();
})();

