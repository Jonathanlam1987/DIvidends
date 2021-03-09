
const db = require('../db.js');
const cuid = require('cuid');

const itemSchema  = db.schema({
_id: String, 
name: String,
price: String,
city: String,
imageURL: String,
neighborhood: String,
cuisine: String
})

const product = db.model('product', itemSchema);

async function create(fields) {
    return await new product(fields).save();
}

module.exports = create;