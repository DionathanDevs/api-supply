import {pool} from '../../data/conn.js'


class ContratoDao {

   

async create(contrato){

try {

const conn = pool

const sql = 'INSERT INTO contratos (codigo, descricao) VALUES (?, ?)'


const [rows] = await conn.execute(sql, [contrato.codigo, contrato.descricao])

return rows

}catch(err){
throw new Error('Nao foi possivel criar o contrato no momento')
}



}


async findByCodigo(codigo){

    try {

        const sql = 'SELECT codigo from contratos where codigo = (?)'

        const conn = pool

        const [rows] = await conn.execute(sql, [codigo])

        return rows

    }catch(err){
        
        throw err

    }

}



}

export default ContratoDao
