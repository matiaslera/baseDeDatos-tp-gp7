import { Router } from 'express'
import UsuarioController, { usuarioController } from '../controllers/contenidoController'

class UsuarioRoutes {
    router: Router = Router()
    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', usuarioController.listOfEncuesta)
        this.router.get('/descarga/:id', usuarioController.getOneEncuesta)
        this.router.post('/', usuarioController.createEncuesta)
        this.router.put('/:id', usuarioController.updateEncuesta)
        this.router.delete('/:id', usuarioController.deleteEncuesta)
    }
}

const usuarioRoutes = new UsuarioRoutes()
export default usuarioRoutes.router