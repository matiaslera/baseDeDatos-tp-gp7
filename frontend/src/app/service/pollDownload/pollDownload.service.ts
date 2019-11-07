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
   return await this.httpCLient.get<Poll>(REST_SERVER_URL + "/encuestas/descarga/" + parseInt(idDescarga)).toPromise()
  }
}
