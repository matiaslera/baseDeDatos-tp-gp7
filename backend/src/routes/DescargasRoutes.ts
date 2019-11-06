import {Router } from 'express'
import {descargasController} from '../controllers/DescargasController'


class DescargasRoutes {
    router: Router = Router()
    constructor(){
        this.config()
    }

    config(): void{
        this.router.get('/usuario/:id', descargasController.listOfDescargas)
    }
}

const descargasRoutes = new DescargasRoutes()
export default descargasRoutes.router