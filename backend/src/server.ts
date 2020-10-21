import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

//Rota = conjunto
//Recurso = user

//Metodo HTTP = GET, POST, PUT, DELETE
//Parametro

//GET = Buscar uma informacao (Lista, item)
//POST = Criando uma informacao
//PUT = Editando uma informacao
//DELETE = Deletando uma informacao

//Query Params? http://localhost:3333/users?search=diego
//Route Params? http://localhost:3333/users/1 (Identificar um recurso)
//Body:  http://localhost:3333/users (Corpo da requisicao / enviar dados)

app.listen(3333);
