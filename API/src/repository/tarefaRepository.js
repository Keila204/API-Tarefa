import { con } from './connection.js'


export async function inserirTarefa(tarefa) {
    const comando = 
        `INSERT INTO tb_tarefa (ds_tarefa, nr_ordem, bt_finalizado, dt_cadastro)
	             VALUES (?, ?, ?, ?) `

    const [resposta] = await con.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.finalizado, tarefa.cadastro])
    
    
    return tarefa;
}

export async function listarTarefa(){

    let sql = 'select * from tb_tarefa';
    let resp = await con.query(sql);
    let dados = resp[0];

    return dados;
}

export async function buscarFinalizadas() {
    let comando = `SELECT ds_tarefa, bt_finalizado from tb_tarefa
    where bt_finalizado = true;`

    let back = await con.query(comando);

    return back[0];
}

export async function alterarTarefa (id, tarefa) {

    const comando = 
        ` UPDATE TB_TAREFA 
                SET DS_TAREFA          = ?, 
                NR_ORDEM               = ?, 
                BT_FINALIZADO          = ?, 
                DT_CADASTRO            = ? 
            WHERE ID_TAREFA            = ? `

    const [resposta] = await conexao.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.finalizado, tarefa.cadastro, id])

    return resposta.affectedRows;
}

export async function deletarTarefa (id) {
    console.log(id)
    const comando = 
            ` DELETE FROM TB_TAREFA
                WHERE ID_TAREFA = ?`

    const [resposta] = await conexao.query (comando, [id])
    return resposta.affectedRows;
}
