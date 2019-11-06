import { Request, Response } from 'express'
import pool from '../database'
import { promises } from 'fs';

class UsuarioController {
    public async listOfEncuesta(req: Request, res: Response) {
        await pool.query('SELECT * FROM encuesta',
            function (err, result, fields) { if (err) throw err; res.json(result); });
    }

    public async createEncuesta(req: Request, res: Response): Promise<void> {
        try {
            await pool.query('INSERT INTO encuesta set ?', [req.body])
            res.json({ message: 'La encuesta fue guardada ' })

        } catch (e) {
            console.log("Error al guardar la encuesta: ", e)
            res.status(500)
        }
    }

    public async deleteEncuesta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM encuesta where id_Encuesta=?', [id],
            function (err, result, fields) {
                if (err) throw err; {
                    return res.json({ message: 'La encuesta fue eliminada' })
                }
            })
    }
    public async updateEncuesta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE encuesta set ? where id_Encuesta=?', [req.body, id],
            function (err, result, fields) {
                if (err) throw err; {
                    return res.json({ message: 'La encuesta fue Actualizada' })
                }

            })
    }
    public async getOneEncuesta(req: Request, res: Response): Promise<any> {
        const { id } = req.params
        await pool.query('SELECT * FROM encuesta where Descarga_ID_Descarga=?', [id],
            function (err, result, fields) {
                if (err) throw err; if (result.length > 0) { return res.json(result[0]); }
                res.status(404).json({ text: "La encuesta no existe" });
            })
    }

}



export const usuarioController = new UsuarioController()
export default usuarioController