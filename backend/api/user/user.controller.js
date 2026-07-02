import { userCreateService } from './user.service.js'
import { resErroServer , resSucesso } from '../../util/retorno.http.js';

export const userControllerCreate = async (req, res) => {

try{
    
const response = await userCreateService(req.body)    

if(!response){
    throw new Error('Erro ao criar usuario.')
}

return resSucesso(res, 'Usuario criado com sucesso!')

}catch(err){

return resErroServer(res, err.message)

}

}

