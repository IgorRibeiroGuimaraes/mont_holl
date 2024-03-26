export default class PortaModel{
    //# = atributo privado
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean


    //Construtor da minha classe

    constructor(numero: number, temPresente = false, selecionada = false, aberta = false){
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }



    //Métodos get para poderem pegar os atributos privados da minha classe
    get numero(){
        return this.#numero
    }

    get temPresente(){
        return this.#temPresente
    }

    get selecionada(){
        return this.#selecionada
    }

    get aberta(){
        return this.#aberta
    }

    get fechada(){
        return !this.aberta
    }

    // criara uma nova instancia do projeto, assim não mexendo nos valores internos do projeto, se precisar alterar criará uma nova instancia

    desmarcar(){
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alterarMacacao(){
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir(){
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}
