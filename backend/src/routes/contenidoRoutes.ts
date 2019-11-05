import { Router } from 'express'
import UsuarioController, { usuarioController } from '../controllers/contenidoController'

class UsuarioRoutes {
    router: Router = Router()
    constructor() {
        this.config()
    }

    config(): void {
        this.router.get('/', usuarioController.list)
        this.router.get('/:id', usuarioController.getOne)
        this.router.post('/', usuarioController.create)
        this.router.put('/:id', usuarioController.update)
        this.router.delete('/:id', usuarioController.delete)
    }
}

const usuarioRoutes = new UsuarioRoutes()
export default usuarioRoutes.router