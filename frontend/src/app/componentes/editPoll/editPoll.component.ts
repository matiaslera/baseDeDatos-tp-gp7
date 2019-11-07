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
  poll : Poll 
  idDownload: number = parseInt(this.route.snapshot.paramMap.get("id"))
  constructor(private route: ActivatedRoute, private pollDownloadService: PollDownloadService, public dialog: MatDialog){
  }
  async ngOnInit() {
    try {
      this.poll = await this.pollDownloadService.getPoll(this.idDownload)
    } catch (error) {
      console.error(error)
    }
    console.log(this.poll)
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
