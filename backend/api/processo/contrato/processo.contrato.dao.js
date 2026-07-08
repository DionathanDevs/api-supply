import { pool } from "../../../data/conn.js"

class ProcessoContratoDAO {


async criarProcessoContrato(){

try {

const conn = pool

const sql = 'INSERT INTO processos(fluxo, status) values (?, ?)'

const [rows] = await conn.execute(sql, [1, 1])


}catch(err){
    throw err
}



}





}

export default ProcessoContratoDAO