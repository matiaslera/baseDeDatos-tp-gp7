export class Poll{
    id_encuesta: number = null
    puntaje: number
    resumen_positivo: string
    resumen_negativo: string
    Descarga_ID_Descarga:string

    static fromJson(PollJSON): Poll {
        return Object.assign(new Poll(), PollJSON)
    }

    toJson(){
        delete this.id_encuesta
        return {...this}
    }
}