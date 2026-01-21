import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor (private router:ActivatedRoute){}
  furteherDetails: boolean = false;
  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('test@gmail.com', [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/),
    ]),
    password: new FormControl(''),
  });
  declareCheckBox = new FormControl(false);
  handleCheckBox() {
    console.log(this.declareCheckBox.value);
    this.furteherDetails = this.declareCheckBox.value
      ? this.declareCheckBox.value
      : false;
  }
}
