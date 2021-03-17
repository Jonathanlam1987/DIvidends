const cuid = require('cuid');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const db = require('../db.js');
const auth = require('../services/auth.js');
const mongoose = require("mongoose");

const userCategories = [ 'customer', 'admin'];
const SALT_ROUNDS = 10;
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

async function create(fields) {
    return new User({
        ...fields,
        password: await bcrypt.hash(fields.password, SALT_ROUNDS),
    }).save();
}

async function login(name, password) {
    foundUser = await User.findOne({ name }).exec();
    if (!foundUser) {
        console.log('could not find user ${user}');
        return null;
}

const isAuthenticated = await bcrypt.compare(password, foundUser.password);
if (!isAuthenticated){
    return null;
}

return auth.sign(name);
}

function get(name) {
    return User.findOne({ name }).exec();
}

module.exports = {
    create,
    login,
    get,
}