import { Request, Response } from "express"
import pool from "../routes/database"
class ContenidoController {
    public list(req: Request, res: Response) {
        res.json({ text: "listando contenido" })
    }

    public getOne(req: Request, res: Response) {
        res.json({ text: "this is contenido" + req.params.id })
    }
    public async  create(req: Request, res: Response): Promise<void> {
        await pool.query("INSERT INTO contenido set?", [req.body])
        res.json({messsage: "creating a contenido" })

    }

    public delete(req: Request, res: Response) {
        res.json({ text: "deleting a contenido" })
    }
    public update(req: Request, res: Response) {
        res.json({ text: "update a contenido" + req.params.id })
    }
}

export const contenidoController = new ContenidoController() 