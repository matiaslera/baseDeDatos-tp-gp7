import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/reportService/report.service';
import * as moment from 'moment';
import { MatSnackBar } from '@Angular/material';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['name', 'extension', 'highScore', 'averageScore', 'lowScore', 'downloadAmount']
  dataSource: any
  dateFrom: Date = null
  dateTo: Date = null
  constructor(private reportService: ReportService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.dataSource = await this.reportService.getReportComplete()
  }

  async filterReport() {
    if (this.dateTo < this.dateFrom) { this.openSnackBar("La fecha desde no puede ser mayor a fecha hasta"); return }
    let d1 = moment(this.dateFrom)
    let d2 = moment(this.dateTo)
    this.dataSource = null
    this.dataSource = await this.reportService.getReportfiltered(d1, d2)
    this.dateFrom = null
    this.dateTo = null
  }
  isDeactivated() {
    return (this.dateFrom === null || this.dateTo === null)
  }
  showAmountOfDownloads() {
    const result = this.dataSource.reduce((sum, data) => sum + data.cantidad_descargas, 0)
    return result
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "x", {
      duration: 2000,
    });
  }
}
