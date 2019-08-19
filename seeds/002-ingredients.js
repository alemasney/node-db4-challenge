
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'noodle', recipe_id: 1},
        { id: 2, ingredient_name: 'butter', recipe_id: 1},
        { id: 3, ingredient_name: 'chicken broth', recipe_id: 2}
      ]);
    });
};
