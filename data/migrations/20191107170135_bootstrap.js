
exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();

        tbl.string('recipe_name', 255).notNullable().unique();
        tbl.string('instructions', 1000);
    })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 255).notNullable().unique();
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 255).notNullable();
            tbl.float('quantity')
            tbl.string('measurement')
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipe')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl
                .integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('ingredient')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')


};
