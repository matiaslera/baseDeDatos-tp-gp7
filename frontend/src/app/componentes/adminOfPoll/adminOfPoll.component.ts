import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Poll } from 'src/app/domain/Poll';
import { PollDownloadService } from 'src/app/service/pollDownload/pollDownload.service';
import { MatSnackBar } from '@Angular/material';

@Component({
  selector: 'app-adminOfPoll',
  templateUrl: './adminOfPoll.component.html',
  styleUrls: ['./adminOfPoll.component.css']
})
export class AdminOfPollComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminOfPollComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Poll,public pollDownloadService: PollDownloadService,private snackBar: MatSnackBar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  async save(){
    if(this.data.id_encuesta==null){
      debugger
      await this.pollDownloadService.newPoll(this.data)
      this.openSnackBar("Encuesta guardada con exito")
    }
    else{
      debugger
      await this.pollDownloadService.editPoll(this.data)
      this.openSnackBar("Encuesta editada con exito")
    }
  }
  ngOnInit() {
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, "", {
      duration: 3000,
    });
  }
  cantSave(){
    return this.data.puntaje == null || this.data.resumen_negativo == null|| this.data.resumen_positivo == null
    ||this.data.resumen_negativo == "" ||this.data.resumen_positivo == ""
  }
}
