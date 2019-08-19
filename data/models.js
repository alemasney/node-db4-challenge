const db = require('./db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
};

function getShoppingList(id) {
    return db('ingredients')
    .where('ingredients.recipe_id', id)
};

function getInstructions(recipe_id) {

};