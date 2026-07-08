const criarProcessoService = async(req, fluxo) =>{


try{

const fluxoIniciado = await postCreateFluxo(req, fluxo)

if(!fluxoIniciado){
    throw new Error('Erro ao iniciar fluxo.')
}

return fluxoIniciado


}catch(err){
    throw err
}




}