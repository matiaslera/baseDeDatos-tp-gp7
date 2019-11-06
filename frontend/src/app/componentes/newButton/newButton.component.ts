import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@Angular/material';
import { AdminOfPollComponent } from '../adminOfPoll/adminOfPoll.component';

@Component({
  selector: 'app-newButton',
  templateUrl: './newButton.component.html',
  styleUrls: ['./newButton.component.css']
})
export class NewButtonComponent {

  constructor(public dialog: MatDialog){}
  openNewPoll(){
    const dialogRef = this.dialog.open(AdminOfPollComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
