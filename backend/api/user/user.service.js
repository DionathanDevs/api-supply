import User from "./user.model.js";
import {} from '../../data/conn.js'

const userCreateService = async (body) => {

const { nome, sobrenome, email } = body;

try{

const user = new User(nome, sobrenome, email);

const userExists = await dao.consultaEmail(email)

if(userExists){
    throw new Error('Usuario ja cadastrado. Tente realizar o login.')
}

const validaEmail = String(user.email)

if(/@/.test(validaEmail)){
    throw new Error('Formato de email informado invalido')
}

const userCreate = await dao.create(user)

if(!userCreate){
    throw new Error('Nao foi possivel criar o usuario')
}

return true;

}catch(err){
throw err
}


}