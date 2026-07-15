import ItemDAO from './item.dao.js'

export const criaItemService = async (codigo, descricao) => {


try{


if(!codigo){
    throw new Error('Codigo de item nao informado!')
}

if(!descricao){
    throw new Error('Descricao de item nao informado!')
}

const itemDAO = new ItemDAO()

const itemJaExiste = await itemDAO.consultaCodigo(codigo)

if(itemJaExiste){
    throw new Error('Nao foi possivel criar o item, codigo de item ja existe.')
}



}catch(err){

}


} 