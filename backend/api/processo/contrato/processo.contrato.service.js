
import ProcessoContratoDAO from "./processo.contrato.dao.js"

export const criarProcessoServiceContrato = (contrato, fluxo, status) => {

try{

    const processoDAO = new ProcessoContratoDAO()
    const processoCriado = processoDAO.criarProcessoContrato(contrato, fluxo, status) 

    if(!processoCriado){
        throw new Error('Erro ao criar o processo de contrato!')
    }

    return processoCriado
}catch(err){
    throw err
}

}