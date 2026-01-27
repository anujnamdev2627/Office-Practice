import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Forms';  

  // fb = inject(FormBu ilder);
  // maxEmail: boolean = false;
  // maxAdd: boolean = false;
  // userForm = this.fb.group({
  //   userName: ['', [Validators.required, Validators.maxLength(20)]],
  //   surName: ['', [Validators.required, Validators.maxLength(20)]],
  //   email: ['', [Validators.required]],
  //   additionalEmail: this.fb.array([]),
  //   address: this.fb.group({
  //     houseNo: [''],
  //     street1: [''],
  //     addAddress: this.fb.array([]),
  //     district: [''],
  //     state: [''],
  //   }),
  //   education: this.fb.group({
  //     degree: [''],
  //     organization: [''],
  //     grade: [''],
  //   }),
  //   addEducation: this.fb.array([]),
  // });
  // //!Email Logic

  // //! Email
  // get additionalEmail() {
  //   return this.userForm.get('additionalEmail') as FormArray;
  // }
  // addEmail() {
  //   this.additionalEmail.push(new FormControl(''));
  //   if (this.additionalEmail.length > 1) {
  //     this.maxEmail = true;
  //   }
  // }
  // removeEmail(i: number) {
  //   this.additionalEmail.removeAt(i);
  //   this.maxEmail = false;
  // }

  // //!Address Logic

  // get address() {
  //   return this.userForm.get('address')?.get('addAddress') as FormArray;
  // }
  // addAddress() {
  //   this.address.push(new FormControl(''));
  //   if (this.address.length > 1) {
  //     this.maxAdd = true;
  //   }
  // }
  // removeAddress(i: number) {
  //   this.address.removeAt(i);
  //   this.maxAdd = false;
  // }
  // //!Education Logic

  // get education(): FormArray {
  //   return this.userForm.get('addEducation') as FormArray;
  // }

  // createEducation(): FormGroup {
  //   return this.fb.group({
  //     degree: ['', Validators.required],
  //     organization: ['', Validators.required],
  //     grade: [''],
  //   });
  // }
  // addEducation() {
  //   this.education.push(this.createEducation());
  // }
  // removeEducation(i: number) {
  // console.log(i);
  //   this.education.removeAt(i)
  // }
}
