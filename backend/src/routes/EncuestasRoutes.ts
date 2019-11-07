import { Router } from 'express'
import UsuarioController, { encuestasController } from '../controllers/EncuestasController'

class EncuestasRoutes {
    router: Router = Router()
    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/descarga/:id', encuestasController.getOneEncuesta)
        this.router.post('/', encuestasController.createEncuesta)
        this.router.put('/:id', encuestasController.updateEncuesta)
        this.router.delete('/:id', encuestasController.deleteEncuesta)
    }
}

const encuestasRoutes = new EncuestasRoutes()
export default encuestasRoutes.router