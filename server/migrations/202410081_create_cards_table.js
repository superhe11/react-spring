export async function up(knex) {
    await knex.schema.createTable('cards', function (table) {
        table.increments('id').primary();
        table.text('image_alt').notNullable();
        table.text('image_src').notNullable();
        table.text('heading').notNullable();
        table.text('description').notNullable();
    });
}

export async function down(knex) {
    await knex.schema.dropTableIfExists('cards');
}
