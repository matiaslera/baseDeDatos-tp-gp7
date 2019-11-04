import {Router} from "express"
import { contenidoController } from "../controllers/contenidoController"

class ContenidoRoutes{
    public router: Router = Router()
    constructor(){
        this.config()
    }
    config():void{
        this.router.get("/",contenidoController.list)
        this.router.get("/:id",contenidoController.getOne)
        this.router.post("/", contenidoController.create)
        this.router.put("/:id", contenidoController.update )
        this.router.delete("/:id", contenidoController.delete )

    }
}
const indexRoutes = new ContenidoRoutes()
export default indexRoutes.router