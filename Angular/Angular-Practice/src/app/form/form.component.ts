import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(
    private router: ActivatedRoute,
    private postService: PostsService,
  ) {}
  // furteherDetails: boolean = false;
  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    // surname: new FormControl('', [Validators.required]),
    email: new FormControl('test@gmail.com', [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/),
    ]),
    // password: new FormControl(''),
    age: new FormControl('', [Validators.min(1)]),
  });

  //!Need to do later
  // declareCheckBox = new FormControl(false);
  // handleCheckBox() {
  //   console.log(this.declareCheckBox.value);
  //   this.furteherDetails = this.declareCheckBox.value
  //     ? this.declareCheckBox.value
  //     : false;
  // }

  submit() {
    console.log(this.formData.value);
    this.postService.saveUsers(this.formData.value).subscribe((data: any) => {
      console.log(data);
    });
  }
}
