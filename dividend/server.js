require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { authenticateUser } = require('./middleware/authMiddleware.js');
const { renderProductsList } = require("./controllers/productController.js");


// const auth = require('./utils/auth.js');
// const { Product,list,itemCusine,create } = require('./models/product.js');
// const user = require('./models/user.js');

const {
  renderSignupForm, processSignupSubmission,renderLoginForm,processLoginSubmission
} = require('./controllers/userControllers');

const app = express();




// configure express to use handlebars
app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandlebars({
        defaultLayout: 'main',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials',
}));


// MIDDLEWARE

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


// ROUTING
app.get("/", renderProductsList);
app.get("/city", renderProductsList);

app.get('/signup', renderSignupForm);
app.get('/signup', processSignupSubmission);

app.get("/login", renderLoginForm);
app.post("/login", processLoginSubmission);





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
app.listen(9000, () => {
    console.log("Express started on port 9000");
  });
  
