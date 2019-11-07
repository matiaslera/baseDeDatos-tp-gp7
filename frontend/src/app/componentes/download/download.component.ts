import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadService } from 'src/app/service/download/Download.service';
import { Download } from 'src/app/domain/Download';




@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  download: Download = new Download
  displayedColumns: string[] = ['title', 'extension', 'fecha', "action"];
  constructor(private router: Router, private downloadService: DownloadService) { }
  downloads: Download[]
  backend: Download[]
  navegatePoll(download: Download) {
    this.router.navigateByUrl('home/descargas/editar/' + download.id_descarga)
  }

  async ngOnInit() {
    try {
      this.downloads = await this.downloadService.getdownloads()
      this.backend =  this.downloads
    } catch (error) {
      console.error(error)
    }
  }

  filterDownload(nameDownload){
    this.downloads = this.backend
    console.log(nameDownload.value)
    this.downloads = this.downloads.filter(expediente =>
      expediente.titulo.indexOf(nameDownload.value) >= 0
);
  console.log(this.downloads)
  }

}
