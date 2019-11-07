import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadService } from 'src/app/service/download/Download.service';
import { Download } from 'src/app/domain/Download';

export interface ContensElement {
  title: string;
  extension: string;
  fecha: string
}

const ELEMENT_CONTENS: ContensElement[] = [
  { title: 'Game of thones', extension: '1.0079', fecha: '2019-01-01' },
  { title: 'gladiador', extension: '4.0026', fecha: '2019-01-01' },
  { title: 'los picapiedras', extension: '18.9984', fecha: '2019-01-01' },
  { title: 'SAO', extension: '20.1797', fecha: '2019-01-01' },
];


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  displayedColumns: string[] = ['title', 'extension', 'fecha', "action"];
  dataSource = ELEMENT_CONTENS;
  constructor(private router: Router, private downloadService: DownloadService) { }
  downloads: Download[]
  navegatePoll() {
    this.router.navigateByUrl('home/descargas/editar');
  }

  async ngOnInit() {
    try {
      this.downloads = await this.downloadService.getdownloads()
    } catch (error) {
      console.error(error)
    }
  }

}
