import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Succulent } from 'src/app/interface/succulent.interface';
import { SucculentService } from 'src/app/service/succulent.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent {

  succulent: Succulent = {} as Succulent;

  constructor( 
    private service: SucculentService,
    private route: ActivatedRoute,
 
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.findById(id);
  }

  findById(id: number) {
    this.service.findById(id).subscribe(result => {
      this.succulent = result;
    })
  }

  update(succulent: Succulent) {
    this.service.update(succulent).subscribe(updatedSucculent => {
      this.succulent = updatedSucculent;
    })
    alert("There you go!")
  }

}
