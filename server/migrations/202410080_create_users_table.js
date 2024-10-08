export async function up(knex) {
    await knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('username', 50).notNullable().unique();
        table.string('password', 255).notNullable();
        table.string('first_name', 50).notNullable();
        table.string('last_name', 50).notNullable();
        table.integer('age').notNullable();
    });
}

export async function down(knex) {
    await knex.schema.dropTableIfExists('users');
}
