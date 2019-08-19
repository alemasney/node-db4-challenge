
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128)
                .notNullable()
                .unique();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128)
                .notNullable()
                .unique();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
        })
};

exports.down = function (knex) {
    return (knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes'));
};
