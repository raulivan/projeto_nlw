import Knex from 'knex';//Letra maisucula se refere oaos tipos

export async function up(knex: Knex) {
    return knex.schema.createTable('PONTOS_ITENS', table => {
        table.increments('id').primary();
        table.integer('pontos_id')
            .notNullable()
            .references('id')
            .inTable('PONTOS');
        table.integer('itens_id')
            .notNullable()
            .references('id')
            .inTable('ITENS');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('PONTOS_ITENS');
}