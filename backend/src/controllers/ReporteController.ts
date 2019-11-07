import { Request, Response } from 'express'
import pool from '../database'

class ReporteController {
    public async reporte(req: Request, res: Response) {
        await pool.query('call reporte(?,?)',[req.body[0],req.body[1]],
            function (err, result, fields) { if (err) throw err; res.json(result[0]); });
    }
}

export const reporteController = new ReporteController()
export default reporteController