import { criarProcessoService } from './processo.service.js'


export const criarProcesso = async(req, res) => {

    const { contrato, fluxo, status} = req.body

    if(!fluxo){
        return res.status(404).json({
            success: false,
            message:"Fluxo nao enviado!"
        })
    }

    try{

        const processoServiceCriado = await criarProcessoService(contrato, fluxo, status)

        if(!processoServiceCriado){
            throw new Error('Erro ao criar processo')
        }


        return res.status(201).json({
            success: true,
            processoServiceCriado
        })
        
    }catch(err){
        return res.status(404).json({
            success: false,
            message: err.message || 'Erro inesperado, contate o suporte.'
        })
    }


}