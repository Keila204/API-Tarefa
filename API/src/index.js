import 'dotenv/config'
import { con } from './repository/connection.js'
import tarefaController from './controller/tarefaController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());


server.use(tarefaController);


server.listen(process.env.PORT, () => console.log(`API Conectada na Porta ${process.env.PORT}`))
