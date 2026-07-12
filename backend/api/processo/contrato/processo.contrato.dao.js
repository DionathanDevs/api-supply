import { pool } from "../../../data/conn.js"

class ProcessoContratoDAO {


async criarProcessoContrato(contrato, fluxo, status){

const conn = pool.getConnection()

try {
    
(await conn).beginTransaction()

const sqlCriar = 'INSERT INTO processos(fluxo, status) values (?, ?)'

const [rows] = await (await conn).execute(sqlCriar, [fluxo, status])

const insertId = rows?.insertId

const sqlVincular = 'INSERT INTO contratos_processos(contrato, processo) values (?, ?)'

const [rows2] = await (await conn).execute(sqlVincular, [contrato, insertId] )

if(!rows2.insertId){
    throw new Error('Erro ao vincular processo ao contrato')
}

(await conn).commit()

return rows , rows2

}catch(err){
    (await conn).rollback()
    console.log('erro, rollback rodado')
    throw err
}

}
}

export default ProcessoContratoDAO