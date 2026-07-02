class ContratoDao {

constructor(conn){
    this.conn = conn
}



async create(contrato){

try {

const pool = this.conn

const sql = 'INSERT INTO contratos (codigo, descricao, data_criacao, ativo) VALUES (?, ?, NOW(), ?)'


const [rows] = await pool.execute(sql, contrato.codigo, contrato.descricao, new Date(), 1)

return rows

}catch(err){
throw new Error('Nao foi possivel criar o contrato no momento')
}



}




}

