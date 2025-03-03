import PortaModel from "../model/porta";

export function criarPortas(qtde: number, portaComPresente: number): PortaModel[]{
    return Array.from({length: qtde}, (_,i) =>{
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    })
}


export function atualizarPortas(portas: PortaModel[], PortaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual =>{
        const igualModificada = portaAtual.numero === PortaModificada.numero

        if(igualModificada){
            return PortaModificada
        }
        else{
           return PortaModificada.aberta ? portaAtual: portaAtual.desmarcar()
        }
    })
}