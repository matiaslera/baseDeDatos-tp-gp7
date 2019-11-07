export class Poll{
    id_encuesta: number = null
    puntaje: number = null
    resumen_positivo: string = null
    resumen_negativo: string = null
    Descarga_ID_Descarga:string

    static fromJson(PollJSON): Poll {
        return Object.assign(new Poll(), PollJSON)
    }

    toJson(){
        delete this.id_encuesta
        return {...this}
    }
}