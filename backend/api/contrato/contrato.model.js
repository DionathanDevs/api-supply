class Contrato {


    constructor(codigo, descricao){
        this.codigo = codigo
        this.descricao = descricao
    }

    getCodigo(){
        return this.codigo
    }

    getDescricao(){
        return this.descricao
    }

    setCodigo(codigo){
        this.codigo = codigo
    }

    setDescricao(descricao){
        this.descricao = descricao
    }



}

export default Contrato