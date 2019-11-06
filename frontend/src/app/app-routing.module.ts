import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ReportComponent } from './componentes/report/report.component';
import { PollComponent } from './componentes/poll/poll.component';
import { ContentsComponent } from './componentes/contents/contents.component';
import { DownloadComponent } from './componentes/download/download.component';
import { EditPollComponent } from './componentes/editPoll/editPoll.component';
import { NewButtonComponent } from './componentes/newButton/newButton.component';
import { AdminOfPollComponent } from './componentes/adminOfPoll/adminOfPoll.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/descargas', component: DownloadComponent},
  {path: 'home/descargas/editar', component: EditPollComponent},
  {path: 'home/encuesta/nueva', component: NewButtonComponent},
  {path: 'home/encuesta/nueva/id', component: AdminOfPollComponent},
  {path: 'home/reporte', component: ReportComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
