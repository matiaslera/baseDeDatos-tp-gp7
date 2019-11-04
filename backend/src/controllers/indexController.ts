import {Request, Response} from "express"
class IndexController {
   public index (req: Request, res:Response){
        res.send("hessllo")
    } 
}

export const indexController = new IndexController() 