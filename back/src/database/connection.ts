import knex from 'knex';

const connection = knex({
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
    }
});

export default connection;