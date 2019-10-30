import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

export interface records {
  name: string;
  description: string;
  action: string;
}

const ELEMENT_DATA: records[] = [
  {name: 'Hydrogen', description: '1.0079', action: 'H'},
  {name: 'Helium', description: '4.0026', action: 'He'},
  {name: 'Lithium', description:' 6.941', action: 'Li'},
  {name: 'Beryllium', description: '9.0122', action: 'Be'},
  {name: 'Boron', description: '10.811', action: 'B'},
  {name: 'Carbon', description: '12.0107', action: 'C'},
  {name: 'Nitrogen', description: '14.0067', action: 'N'},
  {name: 'Oxygen', description: '15.9994', action: 'O'},
  {name: 'Fluorine', description: '18.9984', action: 'F'},
  {name: 'Neon', description: '20.1797', action: 'Ne'},
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

