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
import { AdminOfPollComponent } from './componentes/adminOfPoll/adminOfPoll.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'
import { LoginComponent } from './componentes/Login/Login.component';

registerLocaleData(localeEs)
@NgModule({
   declarations: [
      AppComponent,
      ReportComponent,
      PollComponent,
      HomeComponent,
      DownloadComponent,
      EditPollComponent,
      AdminOfPollComponent,
      ToolbarComponent,
      LoginComponent,
   ],

   entryComponents: [
      AdminOfPollComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
