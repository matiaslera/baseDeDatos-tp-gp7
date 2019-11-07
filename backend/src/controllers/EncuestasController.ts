import { Request, Response } from 'express'
import pool from '../database'
import { promises } from 'fs';

class EncuestasController {
    public async createEncuesta(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO encuestas set ?', [req.body]
            , function (err, result, fields) {
                if (err) res.status(500).json("error al guardar la encuesta " + err);
                if (result.affectedRows > 0) {
                    return res.json("La encuesta se guardo correctamente");
                }
                res.status(500).json("error al guardar la encuesta");
            })
    }

    public async deleteEncuesta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM encuestas where id_encuesta=?', [id]
            , function (err, result, fields) {
                if (err) return res.status(500).json("error al eliminar la encuesta " + err)
                if (result.affectedRows > 0) {
                    return res.json("La encuesta se elimino correctamente")
                }
                return res.status(404).json("La encuesta no existe")

            })
    }
    public async updateEncuesta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE encuestas set ? where id_encuesta=?', [req.body, id],
            function (err, result, fields) {
                if (err) throw err; {
                    return res.json('La encuesta fue Actualizada')
                }
            })
    }
    public async getOneEncuesta(req: Request, res: Response): Promise<any> {
        const { id } = req.params
        await pool.query('SELECT * FROM encuestas where descarga_id_descarga=?', [id],
            function (err, result, fields) {
                if (err) return res.status(500).json("error al consultar la encuesta" + err)
                if (result.length > 0) { return res.json(result[0]); }
                res.status(404).json("La encuesta no existe");
            }) 
    }

}



export const encuestasController = new EncuestasController()
export default encuestasController