import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('ITENS').insert([
        {
            titulo: 'Lampadas',
            image: 'lampadas.svg'
        },
        {
            titulo: 'Pilhas e Baterias',
            image: 'baterias.svg'
        },
        {
            titulo: 'Papeis e Papelao',
            image: 'papeis-papelao.svg'
        },
        {
            titulo: 'Resíduos eletronicos',
            image: 'eletronicos.svg'
        },
        {
            titulo: 'Resíduos organicos',
            image: 'organicos.svg'
        },
        {
            titulo: 'Óleo de Conzinha',
            image: 'oleo.svg'
        },
    ]);
}