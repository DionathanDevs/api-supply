


export const criarProcesso = async(req, res) => {

    if(!req.fluxo){
        return res.status(404).json({
            success: false,
            message:"Fluxo nao enviado!"
        })
    }

    try{

        const fluxo = req.fluxo

        await criarProcessoService(req, fluxo)

        

    }catch(err){
        return res.status(404).json({
            success: false,
            message: err.message || 'Erro inesperado, contate o suporte.'
        })
    }


}