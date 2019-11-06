import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './componentes/home/home.component';
import { ReportComponent } from './componentes/report/report.component';
import { PollComponent } from './componentes/poll/poll.component';
import { DownloadComponent } from './componentes/download/download.component';
import { EditPollComponent } from './componentes/editPoll/editPoll.component';
import { NewButtonComponent } from './componentes/newButton/newButton.component';
import { AdminOfPollComponent } from './componentes/adminOfPoll/adminOfPoll.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';

@NgModule({
   declarations: [
      AppComponent,
      ReportComponent,
      PollComponent,
      HomeComponent,
      DownloadComponent,
      EditPollComponent,
      NewButtonComponent,
      AdminOfPollComponent,
      ToolbarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
