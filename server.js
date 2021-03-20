require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

const { authenticateUser } = require('./middleware/authMiddleware.js');
const { renderProductsList } = require("./controllers/productController.js");


// const auth = require('./utils/auth.js');
// const { Product,list,itemCusine,create } = require('./models/product.js');
// const user = require('./models/user.js');



const {
  renderSignupForm, processSignupSubmission,renderLoginForm,processLoginSubmission
} = require('./controllers/userControllers');
const { get } = require('mongoose');

const app = express();




// configure express to use handlebars
app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandlebars({
        defaultLayout: 'home',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials',
}));

app.get('/', (req, res) => {
    res.render('main');
})



// MIDDLEWARE

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());



// ROUTING
app.get("/", renderProductsList);

app.get('/', function (req, res) {
  res.render('home');
});


 
    app.get('/signup', renderSignupForm);
    app.get('/signup', processSignupSubmission);

    app.get("/login", renderLoginForm);
    app.post("/login", processLoginSubmission);


    // //  renders Alternative page 
    // app.get("/cart", authenticateUser, renderUserCart);
    // app.post("/cart", authenticateUser, addItemToCart);


// ERROR HANDLING MIDDLEWARE
// app.use((req, res, next) => {
//   console.log(err);
//   res.status(404).render("error", { error: err });
// });

// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).render("error", { error: err });
// });

// start the server
app.listen(3500, () => {
    console.log("Express started on port 3500");
  });
  
