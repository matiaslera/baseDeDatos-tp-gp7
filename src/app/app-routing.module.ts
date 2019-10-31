import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ReportComponent } from './componentes/report/report.component';
import { PollComponent } from './componentes/poll/poll.component';
import { ContentsComponent } from './componentes/contents/contents.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/contenidos', component: ContentsComponent},
  {path: 'home/contenidos/encuesta', component: PollComponent},
  {path: 'home/reporte', component: ReportComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
