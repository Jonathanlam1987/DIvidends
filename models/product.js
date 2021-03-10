
const cuid = require('cuid');
const db = require('../db.js');


const itemCuisine = [
    'asian',
    'coffee',
    'pizza',
    'american',
    'bakery',
    'vegeterian'
]

const productSchema  = db.schema({
_id: { type: String, default: cuid },
name: String,
price: String,
city: String,
imageURL: String,
neighborhood: String,
cuisine: { type: String, index: true, enum: itemCuisine, }, 
});

const product = db.model('product', productSchema);

async function create(fields) {
    return await new product(fields).save();
}

function list(){
    return product.find().setOptions({lean:true}).exec();
}

module.exports = {
    itemCuisine,
    create,
    list,
};