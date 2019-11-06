import { Request, Response } from 'express'
import pool from '../database'

class DescargasController {

    public async listOfDescargas(req: Request, res: Response) {
        const { id } = req.params
        var query = "SELECT ID_Descarga, titulo, extension_archivo, date_format(fecha_descarga,'%d/%m/%Y')as fecha_descarga FROM descarga as D join contenido as C on D.Contenido_ID_Contenido=C.ID_Contenido where Usuario_ID_Usuario = ?"
        await pool.query(query,[id],
            function (err, result, fields) { if (err) throw err; res.json(result); });
    }
}

export const descargasController = new DescargasController()
export default descargasController