import { pool } from '../../data/conn.js'

export const consultaEmail = async (email) => {

try{

const sql = 'SELECT email from users where email = ?'

const [rows] = await pool.execute(sql, [email])

return rows;

}catch(err){
    console.log(err)
   throw new Error('Erro ao inserir no banco de dados.')
}

}

export const create = async (user) => {
    try {

    const sql = 'INSERT INTO users (nome, sobrenome, email) VALUES (?, ?, ?)'  
    
    const [rows] = await pool.execute(sql, [user.nome, user.sobrenome, user.email])
    
    return rows;

   }catch(err){
    console.log(err)
    throw new Error('Erro ao inserir no banco de dados.');
   }
}