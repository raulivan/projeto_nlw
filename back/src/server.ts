import express, { response } from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
//import body_parser from 'body-parser';

const app = express();

app.use(cors());//Posso definir controle de acesso
app.use(express.json());
//app.use(express.urlencoded({extended: true}));

//app.use(body_parser.urlencoded({extended: false}));
//app.use(body_parser.json({ type: 'application/*+json' }));
//app.use(body_parser.raw({ type: 'application/vnd.custom-type' }));
//app.use(body_parser.text({ type: 'text/html' }))

app.use(routes);

//Caminho dos arquivos estáticos
app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')));
/*
const users = [
    'Raulivan',
    'Laryssa',
    'Bennicio',
    'Herliane'
];


app.get('/users',(request, response)=>{

    const search = request.query.search;

    const filteredUsers = search ? users.filter(user => user.includes(String(search))) : users;

    return response.status(200).json(filteredUsers);
});

app.get('/users/:id',(request, response)=>{
    const id = Number(request.params.id);

   return response.status(200).json(users[id]);
});


app.post('/users',(request, response) => {

    const data = request.body;
    const user = {
        nome: data.name,
        email: data.email
    };

    response.status(200).json(user);

})*/

app.listen(3333,()=>{
    console.log('servidor online');
});