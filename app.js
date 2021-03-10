require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');


const product = require('./models/product.js');
const user = require('./models/user.js');


// configure express to use handlebars
app.engine(
    "handlebars", expressHandlebars({      
    })
);
app.set('view engine', 'hbs');

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

// routing
app.get('/', (req,res) =>{
    res.render('main', {layout:null});
});
app.get('/', (req,res) =>{
    res.send('hiiii')
})






app.listen(2000, () => {
    console.log('express started on port 2000')
})

