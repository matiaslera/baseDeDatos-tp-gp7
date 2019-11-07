import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Download } from 'src/app/domain/Download';
import { REST_SERVER_URL } from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private httpCLient: HttpClient){}

  async getdownloads() {
    const downloads = await this.httpCLient.get<Download[]>(REST_SERVER_URL + "/descargas/usuario/1").toPromise()
    return downloads.map((download) => Download.fromJson(download))
  }

}
