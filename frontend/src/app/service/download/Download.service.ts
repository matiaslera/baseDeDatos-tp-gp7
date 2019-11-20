import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Download } from 'src/app/domain/Download';
import { REST_SERVER_URL } from '../configuration';

export const USER_ID = 1
@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private httpCLient: HttpClient){}

  async getdownloads(id:number) {
    const downloads = await this.httpCLient.get<Download[]>(REST_SERVER_URL + "/descargas/usuario/"+id).toPromise()
    return downloads.map((download) => Download.fromJson(download))
  }

}
