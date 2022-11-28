import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Succulent } from '../../interface/succulent.interface';
import { SucculentService } from '../../service/succulent.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  succulent: Succulent = {} as Succulent

  constructor(
    private service: SucculentService,
    private form: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  addForm = this.form.group({
    genre: ['', Validators.required],
    species: ['', Validators.required],
    peculiarity: '',
    popularName: '',
    referenceImage: '',
    extra: ''
  })

  save(succulent: Succulent) {
    if (this.addForm.value.genre !== '' && this.addForm.value.species !== '') {
      this.succulent.genre = this.addForm.value.genre!;
      this.succulent.species = this.addForm.value.species!;
      this.succulent.peculiarity = this.addForm.value.peculiarity ? this.addForm.value.peculiarity : '';
      this.succulent.popularName = this.addForm.value.popularName ? this.addForm.value.popularName : '';
      this.succulent.referenceImage = this.addForm.value.referenceImage ? this.addForm.value.referenceImage : '';
      this.succulent.extra = this.addForm.value.extra ? this.addForm.value.extra : '';

      this.service.save(succulent).subscribe(added => {
        this.succulent = added
      })
      alert("Succulent added!")
      this.router.navigate(['/see-all']);
    } else
    alert("Something's wrong!")
  }
}
