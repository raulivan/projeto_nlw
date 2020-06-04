import express from 'express';
import PontosController from './controllers/pontosController';
import IntensController from './controllers/intensController';

const routes = express.Router();
const pontosController = new PontosController();
const intensController = new IntensController();

routes.get('/', (request, response) => {
    return response.status(200).json({
        message: 'Servidor Online'
    });
});

//Listagem de itens
routes.get('/itens',intensController.index);
//Rotas dos pontos
routes.post('/pontos', pontosController.create);
routes.get('/pontos', pontosController.index);
routes.get('/pontos/:id', pontosController.show);

export default routes;