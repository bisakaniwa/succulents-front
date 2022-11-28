import { Component, OnInit } from '@angular/core';
import { Succulent } from '../interface/succulent.interface';

@Component({
  selector: 'app-succulent',
  templateUrl: './succulent.component.html',
  styleUrls: ['./succulent.component.scss']
})
export class SucculentComponent implements OnInit {

  succulent: Succulent = {} as Succulent

  constructor() { }

  ngOnInit(): void {
  }

}
