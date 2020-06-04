import { Request, Response } from 'express';
import knex from '../database/connection';

class ItensController{

    async index (request: Request, response: Response) {
        const itens = await knex('ITENS').select('*');
    
        const serializedItens = itens.map(item => {
            return {
                id: item.id,
                nome: item.titulo,
                image_url: `http://localhost:3333/uploads/${item.image}`,
                image: item.image
            };
        });
    
        return response.status(200).json(serializedItens);
    }
}

export default ItensController;