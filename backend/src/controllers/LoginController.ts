import { Request, Response } from 'express'
import pool from '../database'

class LoginController {
    public async logUser(req: Request, res: Response) {
        await pool.query('select id_usuario, nombre, apellido from usuarios where nombre=?  and password=?',[req.body[0],req.body[1]],
            function (err, result, fields) { if (err) throw err; res.json(result); });
    }
}

export const loginController = new LoginController()
export default loginController