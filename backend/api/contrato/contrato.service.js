import { Contrato } from './contrato.model.js'

export const contratoServiceCreate = (contrato) => {

    try {

        if(await consultaContratoCodigo(contrato.codigo)){
            throw new Error('Contrato ja existe')
        }

        const contrato = new Contrato(contrato)

        const create = await ContratoDAO(contrato)

        if(!create.affectedRows > 0){
            throw new Error('Erro ao criar contrato')
        }

        return true;

    }catch(err){
        throw err
    }

}