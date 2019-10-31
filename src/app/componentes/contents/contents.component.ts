import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface ContensElement {
  title: string;
  extension: string;
  
}

const ELEMENT_CONTENS: ContensElement[] = [
  {title: 'Game of thones', extension: '1.0079'},
  {title: 'gladiador', extension: '4.0026'},
  {title: 'los picapiedras', extension: '18.9984'},
  {title: 'SAO', extension: '20.1797'},
];


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent {
  displayedColumns: string[] = ['title', 'extension', 'action'];
  dataSource = ELEMENT_CONTENS;
  constructor(private router: Router) { }
   
  navegatePoll(){
    this.router.navigateByUrl('home/contenidos/encuesta');
  }

}
