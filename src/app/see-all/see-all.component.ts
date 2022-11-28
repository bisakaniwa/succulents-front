import { Component, OnInit } from '@angular/core';
import { Succulent } from '../interface/succulent.interface';
import { SucculentService } from '../service/succulent.service';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.scss']
})
export class SeeAllComponent implements OnInit {

  succulents: Succulent[] = []

  constructor(private service: SucculentService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.findAll().subscribe(result => {
      this.succulents = result;
    });
  }

}
