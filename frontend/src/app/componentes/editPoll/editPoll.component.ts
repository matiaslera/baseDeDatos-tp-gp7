import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@Angular/material';
import { AdminOfPollComponent } from '../adminOfPoll/adminOfPoll.component';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { PollDownloadService } from 'src/app/service/pollDownload/pollDownload.service';
import { Poll } from 'src/app/domain/Poll';

@Component({
  selector: 'app-editPoll',
  templateUrl: './editPoll.component.html',
  styleUrls: ['./editPoll.component.css']
})
export class EditPollComponent implements OnInit {
  poll: Poll = new Poll
  titulo: string
  idDescarga
  constructor(private snackBar: MatSnackBar,private route: ActivatedRoute, private pollDownloadService: PollDownloadService, public dialog: MatDialog, private router: Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getPool(routeParams.id)
      this.idDescarga = routeParams.id
      this.titulo = "Encuesta sobre la descarga de " + routeParams.nombre
    })

  }
  async getPool(id: string) {
    this.poll = await this.pollDownloadService.getPoll(id)
  }

  openNewPoll() {
    const a = new Poll
    a.Descarga_ID_Descarga = this.idDescarga
    
    const dialogRef = this.dialog.open(AdminOfPollComponent, {
      data: a,
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.router.navigate(['/home/descargas'])
    });
  }
  editPoll() {
    const dialogRef = this.dialog.open(AdminOfPollComponent, {
      data: Poll.fromJson(this.poll),
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.router.navigate(['/home/descargas'])
    });
  }

  deletePoll() {
    this.pollDownloadService.deletePoll(this.poll.id_encuesta.toString())
    this.openSnackBar("Encuesta eliminada con exito") 
    this.router.navigate(['/home/descargas'])
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, "", {
      duration: 3000,
    });
  }
}
