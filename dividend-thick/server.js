const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const data = require("./data.json");

const app = express();

// configure express to use handlebars
app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandlebars({
        defaultLayout: 'main',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials',
}));


// middleware
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// routing

app.get('/', (req, res) => {
  res.render('home'), {items: data.items, undername: "<i>jonathan</i>"}
})

// app.get('/', (req, res) => {
//   const itemsToDisplay = data.items.filter(
//     (item) => item.category === req.query.cusine
//   );
//   res.render('home', { items: itemsToDisplay });
// })


app.get("/", (req, res) => {
  res.render("home");
});
app.get("/signup", (req, res) => {
  res.render("signup", { message : 'hiii' }); 
});
app.post("/submit", (req, res) => {
  res.send(`Thanks, ${req.body.username}, for signing up!`);
});
app.get("/items", (req, res) => {
  res.json(data.items);
});

// start the server
app.listen(3000, () => {
  console.log("Express started on port 3000");
});
