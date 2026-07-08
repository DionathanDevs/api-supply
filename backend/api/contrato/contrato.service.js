import Contrato from './contrato.model.js'
import ContratoDao from './contrato.dao.js'

export const contratoServiceCreate = async (contrato) => {

    try {

        if(!contrato.codigo || !contrato.descricao){
            throw new Error('Codigo de contrato ou descricao nao informados!')
        }

        if(await consultaContratoCodigo(contrato.codigo)){
            throw new Error('Contrato ja existe')
        }


        const contratoModel = new Contrato()

        contratoModel.setCodigo(contrato.codigo)
        contratoModel.setDescricao(contrato.descricao)

        const contratoDAO = new ContratoDao()

        const create = await contratoDAO.create(contratoModel)

        if(!create.affectedRows > 0){
            throw new Error('Erro ao criar contrato')
        }

        return true;

    }catch(err){
        throw err
    }

}

export const consultaContratoCodigo = async (codigoContrato) => {

try {

const codigo = codigoContrato

if(!codigo){
    throw new Error('Codigo do contrato nao informado!')
}

const contratoDAO = new ContratoDao()

const existeContrato = contratoDAO.findByCodigo(codigo)

console.log(existeContrato)

}catch(err){

throw err

}




} 