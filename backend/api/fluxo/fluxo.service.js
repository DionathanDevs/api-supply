export const fluxoServiceCreate = (req, fluxo) => {

try {

    if(fluxo == 'contrato'){
        const processoContratoCriado = await criarProcessoFluxoContrato(req)
    }

}catch(err){
    throw err
}


}