import { Request, Response } from 'express'
import pool from '../database'
import { promises } from 'fs';

class UsuarioController {
    public async list(req: Request, res: Response) {
        await pool.query('SELECT * FROM encuesta',
            function (err, result, fields) { if (err) throw err; res.json(result); });
    }


    public async create(req: Request, res: Response): Promise<void> {
        try{
        await pool.query('INSERT INTO usuario set ?', [req.body])
        res.json({ message: ' El Usuario Fue Guardado ' })

        }catch(e){
            console.log("salio todo mal",e)
            res.status(500)
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params; await pool.query('DELETE FROM usuario where id=?', [id],
            function (err, result, fields) {
                if (err) throw err; {
                    return res.json({ message: 'el usuario fue eliminado' })
                }

            })
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params; await pool.query('UPDATE usuario set ? where id=?', [req.body,id],
        function (err, result, fields) {
            if (err) throw err; {
                return res.json({ message: 'el usuario fue Actualizado' })
            }

        })
    }
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params; await pool.query('SELECT * FROM encuesta where id_Encuesta=?', [id],
            function (err, result, fields) {
                if (err) throw err; if (result.length > 0) { return res.json(result[0]); }
                res.status(404).json({ text: "el juego no existe" });
            })
    }

}



export const usuarioController = new UsuarioController()
export default usuarioController