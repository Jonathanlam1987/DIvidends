const { listProducts } = require('../services/productService.js');
const itemCuisine = require('../data/itemCuisine.js')

async function renderProductsList(req, res) {
    const items = await listProducts();
    
    const itemsToDisplay = req.query.category
    ? items.filter((item) => item.category === req.query.category)
    : items;

    res.render('home', { items: itemsToDisplay, itemCuisine });
}

module.exports = {
    renderProductsList
}