export class Download{
    id_descarga: number
    titulo: string=""
    extension_archivo: string
    fecha_descarga:Date

    static fromJson(DownloadJSON): Download {
        return Object.assign(new Download(), DownloadJSON)
    }
}