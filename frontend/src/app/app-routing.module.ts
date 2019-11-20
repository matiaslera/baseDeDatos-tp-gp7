import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ReportComponent } from './componentes/report/report.component';
import { DownloadComponent } from './componentes/download/download.component';
import { EditPollComponent } from './componentes/editPoll/editPoll.component';
import { LoginComponent } from './componentes/Login/Login.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/descargas',canActivate: [AuthGuard], component: DownloadComponent},
  {path: 'home/descargas/encuesta/:id/:nombre',canActivate: [AuthGuard], component: EditPollComponent},
  {path: 'home/reporte',component: ReportComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
