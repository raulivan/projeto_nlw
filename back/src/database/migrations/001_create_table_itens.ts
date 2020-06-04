import Knex from 'knex';//Letra maisucula se refere oaos tipos

export async function up(knex: Knex){
    return knex.schema.createTable('ITENS',table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('titulo',100).notNullable();
    })
}

export  async function down(knex: Knex){
    return knex.schema.dropTable('ITENS');
}