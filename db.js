const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.CONNECTION_STRING);
const db = mongoose.connection;

db.once('open', () => {
    console.log('mongoDb connection established');
});

module.exports = mongoose;