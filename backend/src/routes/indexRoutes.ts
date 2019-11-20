import {Router } from 'express'
import {indexController} from '../controllers/indexController'
import loginController from '../controllers/LoginController'


class IndexRoutes {
    router: Router = Router()
    constructor(){
        this.config()
    }

    config(): void{
        this.router.get('/', indexController.index   )
        this.router.post('/login',loginController.logUser)
    }
}

const indexRoutes = new IndexRoutes()
export default indexRoutes.router