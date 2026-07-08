
import ProcessoContratoDAO from "./processo.contrato.dao.js"

export const criarProcessoService = () => {

try{

const processoDAO = new ProcessoContratoDAO()


processoDAO.criarProcessoContrato() 


}catch(err){
    throw err
}

}