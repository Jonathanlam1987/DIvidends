const cuid = require('cuid');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const db = require('../db.js');


const auth = require('./')