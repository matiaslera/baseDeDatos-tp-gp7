import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poll } from 'src/app/domain/Poll';
import { REST_SERVER_URL } from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class PollDownloadService {
  constructor(private httpCLient: HttpClient){}

  async getPoll(idDescarga:string) {
   const encuestaJson = await this.httpCLient.get<Poll>(REST_SERVER_URL + "/encuestas/descarga/" + parseInt(idDescarga)).toPromise()
   return Object.assign(new Poll(), encuestaJson)
  }

  async deletePoll(id:string){
    await this.httpCLient.delete(REST_SERVER_URL + "/encuestas/"+ parseInt(id)).toPromise()
  }

  async editPoll(poll:Poll){
    await this.httpCLient.put(REST_SERVER_URL + "/encuestas/"+ poll.id_encuesta,poll.toJson()).toPromise()
  }

  async newPoll(poll:Poll){
    await this.httpCLient.post(REST_SERVER_URL + "/encuestas",poll.toJson()).toPromise()
  }

}
