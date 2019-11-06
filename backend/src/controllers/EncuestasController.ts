import { Request, Response } from 'express'
import pool from '../database'
import { promises } from 'fs';

class EncuestasController {
    public async listOfEncuesta(req: Request, res: Response) {
        await pool.query('SELECT * FROM encuestas',
            function (err, result, fields) { if (err) throw err; res.json(result); });
    }

    public async createEncuesta(req: Request, res: Response): Promise<void> {
        try {
            await pool.query('INSERT INTO encuestas set ?', [req.body])
            res.json({ message: 'La encuesta fue guardada ' })

        } catch (e) {
            console.log("Error al guardar la encuesta: ", e)
            res.status(500)
        }
    }

    public async deleteEncuesta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM encuestas where id_encuesta=?', [id],
            function (err, result, fields) {
                if (err) throw err; {
                    return res.json({ message: 'La encuesta fue eliminada' })
                }
            })
    }
    public async updateEncuesta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE encuesta set ? where id_encuesta=?', [req.body, id],
            function (err, result, fields) {
                if (err) throw err; {
                    return res.json({ message: 'La encuesta fue Actualizada' })
                }

            })
    }
    public async getOneEncuesta(req: Request, res: Response): Promise<any> {
        const { id } = req.params
        await pool.query('SELECT * FROM encuestas where descarga_id_descarga=?', [id],
            function (err, result, fields) {
                if (err) throw err; if (result.length > 0) { return res.json(result[0]); }
                res.status(404).json({ text: "La encuesta no existe" });
            })
    }

}



export const encuestasController = new EncuestasController()
export default encuestasController