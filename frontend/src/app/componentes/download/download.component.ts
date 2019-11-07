import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadService } from 'src/app/service/download/Download.service';
import { Download } from 'src/app/domain/Download';
import { PollDownloadService } from 'src/app/service/pollDownload/pollDownload.service';
import { Poll } from 'src/app/domain/Poll';




@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  poll: Poll = new Poll
  download: Download = new Download
  displayedColumns: string[] = ['title', 'extension', 'fecha', "action"];
  constructor(private router: Router, private downloadService: DownloadService, private pollDownloadService: PollDownloadService) { }
  downloads: Download[]
  backend: Download[]
  navegatePoll(download: Download) {
    this.pollofDownload(download)
    if(this.poll.id_encuesta!= null){
      
      this.router.navigateByUrl('home/descargas/editar/' + download.id_descarga)
    }
    else{
      this.router.navigateByUrl('home/encuesta/nueva')
    }
  }

  async ngOnInit() {
    try {
      this.downloads = await this.downloadService.getdownloads()
      
      this.backend =  this.downloads
    } catch (error) {
      console.error(error)
    }
  }
  async pollofDownload(dowload: Download){
    try{
      this.poll =await this.pollDownloadService.getPoll(dowload.id_descarga)
    }
    catch{
      console.log("no existe la encuesta")
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
