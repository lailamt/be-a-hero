//importando os dados de express nessa variável express e suas dependências
const express = require('express');
const routes = require('./routes'); //precisa de './' ou o node vai achar que é um pacote e não um arquivo (como é o caso)
const cors = require('cors');

const app = express();

//converte json em objeto do javascript para o método POST conseguir entender
app.use(cors());
app.use(express.json());
app.use(routes); //importante que isso seja depois da linha acima

/**
 * Rota / Recurso
 * declaração da rota através da / seguido do recurso (EX: '/users')
 */

/**
 * Metodos HTTP
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

 /**
  * Tipos de parâmetros
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parâmeros utilizados para identificar recursos (únicos)
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  //Query: /users?name=Laila&page=2 (POR EXEMPLO)
  //Route: /users/:id (Ex: /users/1)

  /**
   * Bancos de dados
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server (Bancos relacionais e bem estruturados)
   * (Bancos SQL tem linguagem universais)
   * NoSQL: MongoDB, CouchDB, etc (Bancos não relacionais, não tem relações e podem ser não estruturados)
   */

   /**
    * Formas de acessar o SQL
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

/* app.post('/users', (request, response) =>{
    const body = request.body;

    console.log(body);

    return response.json({
        evento: "Semana Omnistack 11.0",
        aluno: "Laila Mota"
    });
}); */


//porta para a comunicação e visualizar o projeto
app.listen(3333);
