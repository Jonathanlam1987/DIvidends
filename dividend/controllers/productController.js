const { listProducts } = require('../services/productService.js');
const itemCuisine = require('../data/itemCuisine.js')

async function renderProductsList(req, res) {
    const items = await listProducts();
    
    const itemsToDisplay = req.query.cuisine
    ? items.filter((item) => item.cuisine === req.query.cuisine)
    : items;






    res.render('home', { items: itemsToDisplay, itemCuisine});

    // res.render('blog', { items: itemsToDisplay });
}

function renderBlog(req, res) {
    res.render('blog', {
        layout: "alternative",
    });
}



module.exports = {
    renderProductsList, renderBlog
}
























// router.get('/new', (req, res) => {
//     res.render('articles/new', { article: new Article()});
// })
 
// router.get('/:id', (req, res) => {
//     const article = Article.findById(req.params.id)
//     res.render('articles/show', { article: new Article() })
// })



// router.post('/', async (req, res) => {
//     let article = new Article({
//         title: req.body.title,
//         description: req.body.description,
//         markdown: req.body.markdown,
//     })
//     try {
//         article = await article.save()
//         res.redirect(`/articles/${article.id}`)
//     } catch (e) {
//         res.render('articles/new', { article : article })
//     }
// })
 

