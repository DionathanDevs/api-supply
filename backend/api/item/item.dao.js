import {pool} from '../../data/conn.js'

class ItemDAO {
  
async consultaCodigo (codigo) {

const conn = pool

try {

const sql = 'select id from itens where codigo = ?'

const [rows] = await conn.execute(sql, [codigo])

return rows

}catch(err){

throw err

}

}  

async create(codigo, descricao){

const conn = pool

try {

const sql = 'insert into itens (codigo, descricao) values (?, ?)'

const [rows] = await conn.execute(sql, [codigo, descricao])

return [rows]

}catch(err){
throw err
}

}

}

export default ItemDAO