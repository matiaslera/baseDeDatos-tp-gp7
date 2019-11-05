import { Request , Response } from 'express'


class IndexController {
  public index  (req: Request, res: Response) {
    const response = {
    text: 'Welcome to te tp base de datos api, the followings urls will show responses directly from database',
    type1: 'get-- URL: /encuesta/ = all encuestas',
    type2: 'get -- URL: /encuesta/:id = an encuesta by id',
    type3: 'post-- URL: /encuesta/ =create new encuesta',
    type4: 'put -- URL: /encuesta/:id = edit an ecuesta',
    type5: 'delete -- URL: /encuesta/:id = delete an encuesta'}
    
    res.json(response)}   
  }

export const indexController = new IndexController()