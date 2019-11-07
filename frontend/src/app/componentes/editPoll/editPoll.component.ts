import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@Angular/material';
import { AdminOfPollComponent } from '../adminOfPoll/adminOfPoll.component';
import { ActivatedRoute } from '@angular/router';
import { PollDownloadService } from 'src/app/service/pollDownload/pollDownload.service';
import { Poll } from 'src/app/domain/Poll';

@Component({
  selector: 'app-editPoll',
  templateUrl: './editPoll.component.html',
  styleUrls: ['./editPoll.component.css']
})
export class EditPollComponent implements  OnInit {
  poll : Poll = new Poll
  titulo: string   
  constructor(private route: ActivatedRoute, private pollDownloadService: PollDownloadService, public dialog: MatDialog){
  }
  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getPool(routeParams.id)
      this.titulo= "Encuesta sobre la descarga de "+routeParams.nombre   
    })
  
  }
  async getPool(id:string){
    this.poll= await this.pollDownloadService.getPoll(id)
  }

  openNewPoll(){
    const dialogRef = this.dialog.open(AdminOfPollComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
