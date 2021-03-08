const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');


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






app.listen(3000, () => {
    console.log('express started on port 3000')
})

