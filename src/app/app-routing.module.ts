import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ReportComponent } from './componentes/report/report.component';
import { PollComponent } from './componentes/poll/poll.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/reporte', component: ReportComponent},
  {path: 'home/encuesta', component: PollComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
