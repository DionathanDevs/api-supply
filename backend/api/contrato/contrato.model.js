class Contrato {


    constructor(identificacao, descricao){
        this.identificacao = identificacao
        this.descricao = descricao
    }

    getIdentificacao(){
        return this.identificacao
    }

    getDescricao(){
        return this.descricao
    }

    setIdentificacao(identificacao){
        this.identificacao = identificacao
    }

    setDescricao(descricao){
        this.descricao = descricao
    }



}

export default { Contrato }