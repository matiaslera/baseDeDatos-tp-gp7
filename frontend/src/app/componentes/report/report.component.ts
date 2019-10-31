import { Component, OnInit } from '@angular/core';

export interface DownloadElement {
  name: string;
  extension: string;
  highScore: number;
  averageScore: number;
  lowScore: number
}

const ELEMENT_DOWNLOAD: DownloadElement[] = [
  {name: 'Game of thones', extension: '1.0079', highScore: 1, averageScore: 2, lowScore:3 },
  {name: 'gladiador', extension: '4.0026', highScore: 1, averageScore: 2, lowScore:3 },
  {name: 'los picapiedras', extension: '18.9984', highScore: 1, averageScore: 2, lowScore:3 },
  {name: 'SAO', extension: '20.1797', highScore: 1, averageScore: 2, lowScore:3 },
];


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent{
  displayedColumns: string[] = ['name', 'extension', 'highScore', 'averageScore', 'lowScore'];
  dataSource = ELEMENT_DOWNLOAD;
  constructor() { }


}
