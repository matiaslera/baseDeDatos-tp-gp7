import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-adminOfPoll',
  templateUrl: './adminOfPoll.component.html',
  styleUrls: ['./adminOfPoll.component.css']
})
export class AdminOfPollComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminOfPollComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
