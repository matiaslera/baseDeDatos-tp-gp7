import { Request , Response } from 'express'


class IndexController {
  public index  (req: Request, res: Response) {
    const response = {
    text: 'Welcome to te tp base de datos api, the followings urls will show responses directly from database',
    type1: 'get-- URL: /encuestas/ = all encuestas',
    type2: 'get -- URL: /encuestas/descarga/:id = an encuesta by descarga_id',
    type3: 'post-- URL: /encuestas =create new encuesta',
    type4: 'put -- URL: /encuestas/:id = edit an ecuesta',
    type5: 'delete -- URL: /encuestas/:id = delete an encuesta',
    type6: 'get -- URL: /descargas/usuario/:id = list of descargas by id_usuario'}
    
    res.json(response)}   
  }

export const indexController = new IndexController()