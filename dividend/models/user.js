const cuid = require('cuid');
const { isEmail } = require('validator');

const db = require('../db.js');

const mongoose = require("mongoose");

const userCategories = [ 'customer', 'admin'];

const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: { type: String, default: cuid },
    name: { type: String, required: true },
    email: { type: String, validate: {validator: isEmail}},
    password: { type: String, required: true},
    category: {
        type: String, 
        enum: userCategories,
    },
});

const User = mongoose.model('User', userSchema);


module.exports = User;

