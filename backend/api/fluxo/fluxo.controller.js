const postCreateFluxo = (req, fluxo) => {

try{
const fluxoCriado = await fluxoServiceCreate(req, fluxo)

if(!fluxoCriado){
    throw new Error('Erro ao criar processo do fluxo')
}
}catch(err){
    throw err
}
    
}