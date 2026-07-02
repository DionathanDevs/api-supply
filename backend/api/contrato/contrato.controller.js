export const contratoControllerCreate = (req, res) => {

const contrato = req.body;

try {
// tratar com Zod antes, pra limpar os dados
const criarContrato = await contratoServiceCreate(contrato)

if(criarContrato){
    return res.status(201).json({
        success:"true",
        message: "Contrato criado com sucesso!"
    })
}

throw new Error('Erro ao criar contrato, contate o suporte.')
 
}catch(err){
    return res.status(404).json({
        success: false,
        message: err.message || 'Erro ao criar contrato'
    })
}


}