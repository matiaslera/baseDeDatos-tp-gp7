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
    return await this.http.post(REST_SERVER_URL + "/reporte", [null,null]).toPromise()
  }
  async getReportfiltered(d1,d2) {
    return await this.http.post(REST_SERVER_URL + "/reporte", [d1,d2]).toPromise()
  }
}
