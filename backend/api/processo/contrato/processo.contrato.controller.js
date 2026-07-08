import { criarProcessoService } from './processo.contrato.service.js'

export const criarProcessoFluxoContrato = () => {

    try{
    
    
    const processoCriou = await criarProcessoService()

    }catch(err){

        throw err
    }



}