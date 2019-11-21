import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from '../configuration';
;

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient){}
  
  async getReportComplete() {
    return await this.http.post<reporte[]>(REST_SERVER_URL + "/reporte", [null,null]).toPromise()
  }
  async getReportfiltered(d1,d2) {
    return await this.http.post<reporte[]>(REST_SERVER_URL + "/reporte", [d1,d2]).toPromise()
  }
}

class reporte{
  titulo:string
  extension_archivo:string
  cantidad_descargas:number
  puntaje_minimo:number
  puntaje_maximo:number
  promedio_puntaje:number
  cantidad_encuestas_respondidas:number
  descripcion:string
}
