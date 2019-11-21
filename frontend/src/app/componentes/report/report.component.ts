import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportService } from 'src/app/service/reportService/report.service';
import * as moment from 'moment';
import { MatSnackBar } from '@Angular/material';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['name', 'extension', 'highScore', 'lowScore', 'averageScore', 'downloadAmount','desc']
  dataSource: any
  dateFrom: Date = null
  dateTo: Date = null
  data:any

  
  constructor(private reportService: ReportService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.data=await this.reportService.getReportComplete()
    this.refreshData()
  }

  async filterReport() {
    if (this.dateTo < this.dateFrom) { this.openSnackBar("La fecha desde no puede ser mayor a fecha hasta"); return }
    let d1 = moment(this.dateFrom).format("YYYY-MM-DD")
    let d2 = moment(this.dateTo).format("YYYY-MM-DD")
    this.dataSource = null
    this.data = await this.reportService.getReportfiltered(d1, d2)
    this.dateFrom = null
    this.dateTo = null
    this.refreshData()
  }
  isDeactivated() {
    return (this.dateFrom === null || this.dateTo === null)
  }
  showAmountOfDownloads() {
    const result = this.data.reduce((sum, data) => sum + data.cantidad_descargas, 0)
    return result
  }
  showAmountOfPolls() {
    const result = this.data.reduce((sum, data) => sum + data.cantidad_encuestas_respondidas, 0)
    return result
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "x", {
      duration: 2000,
    });
  }

  refreshData(){
    this.dataSource=null
    this.dataSource = new MatTableDataSource(this.data)
  }
  sort(){
    this.data.sort((a,b) => (a.descripcion > b.descripcion) ? 1 : ((b.descripcion > a.descripcion) ? -1 : 0))
    this.refreshData()
  }
}
