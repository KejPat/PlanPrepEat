const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
    amount: String,
    ingredient: String
})

const recipeSchema = new Schema({
    name: String,
    recipeType: String,
    description: String,
    image: String,
    ingredients: [ingredientsSchema],
    instructions: [{instruction: String}]
}, {
    timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;