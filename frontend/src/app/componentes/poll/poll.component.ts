import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

export interface records {
  name: string;
  description: string;
  
}

const ELEMENT_DATA: records[] = [
  {name: 'Hydrogen', description: '1.0079'},
  {name: 'Helium', description: '4.0026'},
  {name: 'Lithium', description:' 6.941'},
  {name: 'Beryllium', description: '9.0122'},
  {name: 'Boron', description: '10.811'},
  {name: 'Carbon', description: '12.0107'},
  {name: 'Nitrogen', description: '14.0067'},
  {name: 'Oxygen', description: '15.9994'},
  {name: 'Fluorine', description: '18.9984'},
  {name: 'Neon', description: '20.1797'},
];

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
})
export class PollComponent  {
  displayedColumns: string[] = ['name', 'description', 'action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  
}

