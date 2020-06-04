//Aqui não pode usar a sintaxy do typescript
import path from 'path';

module.exports = {
    client: 'mssql',
    connection: {
        server : 'DESKTOP-F75NQ86\\SQLEXPRESS',
        user: 'sa',
        password: '123456',
        database: 'NLW_DB',
        options: {
            enableArithAbort: true
            /*encrypt: true*/
          },
    },
    migrations:{
        directory: path.resolve(__dirname,'src','database','migrations')
    },
    seeds:{
        directory: path.resolve(__dirname,'src','database','seeds')
    }

}