import { Router } from 'express'
import UsuarioController, { reporteController } from '../controllers/ReporteController'

class ReporteRoutes {
    router: Router = Router()
    constructor() {
        this.config()
    }

    config(): void {
        this.router.post('/', reporteController.reporte)
    }
}

const reporteRoutes = new ReporteRoutes()
export default reporteRoutes.router