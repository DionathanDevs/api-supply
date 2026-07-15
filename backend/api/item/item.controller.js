import { criaItemService } from '../item/item.service.js'

export const criarItem = async (req, res) => {

const {codigo, descricao } = req.body

try{

const criarItem = await criaItemService(codigo, descricao)

if(!criaItem){
    throw new Error('Erro ao criar item')
}

return res.status(201).json({
    success: true,
    message: 'Item criado com sucesso!'
})
}catch(err){
return res.status(404).json({
    success: false,
    message: err.message || 'Erro ao criar item'
})
}


}