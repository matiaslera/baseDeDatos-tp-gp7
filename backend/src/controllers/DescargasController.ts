import { Request, Response } from 'express'
import pool from '../database'

class DescargasController {

    public async listOfDescargas(req: Request, res: Response) {
        const { id } = req.params
        const query = "SELECT id_descarga, titulo, extension_archivo, fecha_descarga FROM descargas as D join contenidos as C on D.contenido_id_contenido=C.id_contenido where usuario_id_usuario = ?"
        await pool.query(query,[id],
            function (err, result, fields) { if (err) throw err; res.json(result); });
    }
}

export const descargasController = new DescargasController()
export default descargasController