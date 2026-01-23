import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Forms';

  fb = inject(FormBuilder);
  maxEmail:boolean=false;
  userForm = this.fb.group({
    userName: ['', [Validators.required, Validators.maxLength(20)]],
    surName: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.required]],
    additionalEmail:this.fb.array([]),
    address: this.fb.group({
      houseNo: [''],
      street1: [''],
      addAddress:  this.fb.array([]),
      district: [''],
      state: [''],
    }),
    education:this.fb.group({
      degree:[''],
      organization:[''],
      grade:['']
    }),
    addEducation:this.fb.array([]),
  });
  //!Need to define adder for address and education

  //! Email
  get additionalEmail(){
    return this.userForm.get('additionalEmail') as FormArray;
  }
  addEmail(){
    this.additionalEmail.push(new FormControl(''))
    if(this.additionalEmail.length>1){
      this.maxEmail=true;
    }
  }
}
