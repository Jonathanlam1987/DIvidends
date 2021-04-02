
const cuid = require('cuid');
const db = require('../db.js');
const { itemPrice, itemCuisine, itemCity }  = require('../data/itemCuisine.js');


const productSchema = db.Schema({
    _id: { type: String, default: cuid },
    name: String,
    price: {
      type: String,
      index: true,
      enum: itemPrice,
    }, 
    city: {
      type: String,
      index: true,
      enum: itemCity,
    },
    imageUrl: String,
    category: {
      type: String,
      index: true,
      enum: itemCuisine,
    },
  });
  
  const Product = db.model("Product", productSchema);
  
  module.exports = Product;
  



// const Schema = mongoose.Schema;


// const productSchema = new Schema({
// _id: { type: String, default: cuid },
// name: String,
// price: String,
// city: String,
// imageURL: String,
// neighborhood: String,
// cuisine: { 
//      type: String,
//      index: true,
//      enum: itemCuisine,
//  },
// });

// const Product = mongoose.model("Product", ProductSchema);

// module.exports = {
//     Product
// };



















// const mongoose = require("mongoose");
// const cuid = require('cuid');
// const db = require('../db.js');
// const Schema = mongoose.Schema;


// const itemCuisine = [
//     'asian',
//     'coffee',
//     'pizza',
//     'american',
//     'bakery',
//     'vegeterian',
// ];

// const ProductSchema = new Schema({
// _id: { type: String, default: cuid },
// name: String,
// price: String,
// city: String,
// imageURL: String,
// neighborhood: String,
// cuisine: { 
//      type: String,
//      index: true,
//      enum: itemCuisine,
//  },
// });

// const Product = mongoose.model("Product", ProductSchema);

// function create(fields) {
//   return new Product(fields).save();
// }

// function list() {
//   return Product..setOptions({ lean: true }).exec();
// }

// module.exports = {
//     itemCuisine,
//     create,
//     list,

// };