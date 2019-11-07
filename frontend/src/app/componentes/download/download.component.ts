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
   async ngOnInit() {
    try {
      this.downloads = await this.downloadService.getdownloads()

      this.backend = this.downloads
    } catch (error) {
      console.error(error)
    }
  }
  filterDownload(nameDownload) {
    this.downloads = this.backend
    this.downloads = this.downloads.filter(expediente =>
      expediente.titulo.indexOf(nameDownload.value) >= 0
    );
    this.download.titulo=""
  }
  cantFilter(){
    return this.download.titulo== ""
  }
}
