import { inserirTarefa, listarTarefa, buscarFinalizadas, alterarTarefa, deletarTarefa } from "../repository/tarefaRepository.js"; 

import { Router } from "express";
const server = Router();


server.post('/tarefa', async (req, resp) => {
    try {
        const tarefaParaInserir= req.body;

        const tarefaInserida = await inserirTarefa(tarefaParaInserir);

        resp.send(tarefaInserida)
    } catch (err) {
        resp.send(400).send({
            erro: err.message
        })
    }
})

server.get('/tarefa/listar', async (req, resp) => {
    let dados = await listarTarefa();
    resp.send(dados);
})

server.get('/tarefa/finalizado', async (req, resp) =>{
    let fin = req.query.fin
    let back = await buscarFinalizadas(fin);
    resp.send(back);
})

server.put('/tarefa/:id', async (req, resp) => {

    try {
        const {id} = req.params
        const tarefaAlterada = req.body

        const resposta = await alterarTarefa(id, tarefaAlterada)
        resp.status(204).send(resposta)
        
    } catch (err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.delete('/tarefa/:id', async (req, resp) => {

    try {
        const {id} = req.params
        const resposta = await deletarTarefa(id)

        resp.status(204).send()

    } catch (err){
        resp.status(404).send({
            erro: err.message
        })
    }
})
export default server;

