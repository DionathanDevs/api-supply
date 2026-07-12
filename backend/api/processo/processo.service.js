import { criarProcessoServiceContrato } from './contrato/processo.contrato.service.js'

export const criarProcessoService = async(contrato, fluxo, status) => {

try{

if(!fluxo){

throw new Error('Fluxo nao informado!')

}

const criarProcessoContrato = await criarProcessoServiceContrato(contrato, fluxo, status)

if(!criarProcessoContrato){
 throw new Error('Erro ao criar processo')
}

return criarProcessoContrato

}catch(err){
    throw err
}




}