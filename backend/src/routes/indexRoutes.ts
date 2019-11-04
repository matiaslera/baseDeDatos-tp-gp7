import {Router} from "express"
import { indexController } from "../controllers/indexController"

class IndexRouters{
    public router: Router = Router()
    constructor(){
        this.config()
    }
    config():void{
        this.router.get("/", indexController.index)

        
    }
}
const indexRoutes = new IndexRouters()
export default indexRoutes.router