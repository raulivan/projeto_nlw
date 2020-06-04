import { Request, Response } from 'express';
import knex from '../database/connection';

class PontosController {

    async index(request: Request, response: Response) {
        const { cidade, uf, itens } = request.query;

        const parsedItens = String(itens).split(',').map(item => Number(item.trim()));

        const pontos = await knex('PONTOS')
        .join('PONTOS_ITENS', 'PONTOS.id', '=', 'PONTOS_ITENS.pontos_id')
        .whereIn('PONTOS_ITENS.itens_id',parsedItens)
        .where('cidade',String(cidade))
        .where('uf',String(uf))
        .distinct()
        .select('PONTOS.*');

        
        return response.status(200).json(pontos);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        //const id = request.parms.id;

        const ponto = await knex('PONTOS')
            .where('id', id)
            .first();

        if (!ponto) {
            return response.status(400).json({
                message: 'Ponto não encontrado'
            });
        }

        const itens = await knex('ITENS')
            .join('PONTOS_ITENS', 'ITENS.id', '=', 'PONTOS_ITENS.itens_id')
            .where('PONTOS_ITENS.pontos_id', id)
            .select('ITENS.titulo');

        return response.status(200).json({ ponto, itens });

    }
    async create(request: Request, response: Response) {

        //Criando um objeto desestruturado, padrão JS
        const {
            nome,
            email,
            whatsapp,
            latitude,
            longitude,
            cidade,
            uf,
            itens
        } = request.body;

        //Criando transação
        const trx = await knex.transaction();

        //Foi criado um objeto usando a sintaxy short, quando os campos tem o mesmo nome
        //Aparentemente os campos tem estar na mesma ordem do banco
        const novo_ponto = {
            image: 'https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            nome,
            email,
            whatsapp,
            cidade,
            uf,
            latitude,
            longitude
        }
        const id_gerado = await trx('PONTOS').insert(novo_ponto).returning('id');

        const pontos_id = id_gerado[0];

        let pontosItens = itens.map((id: number) => {
            return {
                itens_id: id,
                pontos_id: pontos_id
            };
        });

        await trx('PONTOS_ITENS').insert(pontosItens);

        await trx.commit();

        return response.status(200).json({
            id: pontos_id,
            ...novo_ponto//colocando os 3 pontos, ele pega implicitamente todos os atributos do objeto
        });
    }
}

export default PontosController;