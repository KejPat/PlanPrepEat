const router = require('express').Router();
const multer = require('multer');
let Recipe = require('../models/recipe.model');

// create a place to store the recipe image
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads/');
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
})
const upload = multer({storage: storage});

// get recently added recipes when on homepage
router.route('/').get((req, res) => {
    // order recipes by type and get limited number
    const recentlyAdded = Recipe.find().sort({createdAt: -1}).limit(4).exec();
    const dinner = Recipe.find({recipeType: "Dinner"}).sort({createdAt: -1}).limit(2).exec();
    const lunch = Recipe.find({recipeType: "Lunch"}).sort({createdAt: -1}).limit(2).exec();
    
    Promise.all([recentlyAdded, dinner, lunch])
        .then(([recentlyAdded, dinner, lunch]) => {
            res.json({recentlyAdded, dinner, lunch})
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// post new recipe
router.post('/newpost', upload.single('image'), (req, res) => {
    // make a new recipe 
    const newRecipe = new Recipe({
        name: req.body.name,
        recipeType: req.body.type,
        description: req.body.description,
        image: req.file.path,
        ingredients: JSON.parse(req.body.ingredients),
        instructions: JSON.parse(req.body.instructions)
    })

    // save the recipe
    newRecipe.save()
        .then(() => res.json(newRecipe.id))
        .catch(err => res.status(400).json('Error: ' + err));
});

// find recipe by id
router.route('/recipe/:id').get((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
})

// get all recipes with type lunch
router.route('/lunch').get((req, res) => {
    Recipe.find({recipeType: "Lunch"})
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
})

// get all recipes with type lunch
router.route('/dinner').get((req, res) => {
    Recipe.find({recipeType: "Dinner"})
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/search/:name').get((req, res) => {
    Recipe.find({$text: {$search: req.params.name}})
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;