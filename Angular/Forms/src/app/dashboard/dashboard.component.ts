import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { State } from '../interfaces';
import { RouterOutlet } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { StateService } from '../services/state.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  fb = inject(FormBuilder);
  stateService = inject(StateService);
  maxEmail: boolean = false;
  maxAdd: boolean = false;

  states$ = this.stateService.getState();
  cities$!: Observable<any[]>;
  userForm = this.fb.group({
    userName: ['', [Validators.required, Validators.maxLength(20)]],
    surName: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.required]],
    additionalEmail: this.fb.array([]),
    address: this.fb.group({
      houseNo: [''],
      street1: [''],
      addAddress: this.fb.array([]),
      city: [{ value: '', disabled: true }],
      state: [''],
    }),
    education: this.fb.group({
      degree: [''],
      organization: [''],
      grade: [''],
      addEducation: this.fb.array([]),
    }),
  });
  ngOnInit() {
    this.userForm.get('address.city')?.disable();
    this.userForm.get('address.state')?.valueChanges.subscribe((stateId) => {
      if (!stateId) {
        // Reset city if no state
        this.userForm.get('address.city')?.reset();
        this.userForm.get('address.city')?.disable();
        this.cities$ = of([]); // empty observable
        return;
      } 

      this.userForm.get('address.city')?.enable();
      this.cities$ = this.stateService.getCities(stateId);
      // console.log(this.cities$);
    });
  }
  //! Email
  get additionalEmail() {
    return this.userForm.get('additionalEmail') as FormArray;
  }
  addEmail() {
    this.additionalEmail.push(new FormControl(''));
    if (this.additionalEmail.length > 1) {
      this.maxEmail = true;
    }
  }
  removeEmail(i: number) {
    this.additionalEmail.removeAt(i);
    this.maxEmail = false;
  }

  //!Address Logic

  get address() {
    return this.userForm.get('address')?.get('addAddress') as FormArray;
  }
  addAddress() {
    this.address.push(new FormControl(''));
    if (this.address.length > 1) {
      this.maxAdd = true;
    }
  }
  removeAddress(i: number) {
    this.address.removeAt(i);
    this.maxAdd = false;
  }

  //!Education Logic
  removeEducation(i: number) {
    console.log(i);
    this.education.removeAt(i);
  }
  get education(): FormArray {
    return this.userForm.get('education.addEducation') as FormArray;
  }

  createEducation(): FormGroup {
    return this.fb.group({
      degree: [''],
      organization: [''],
      grade: [''],
    });
  }

  addEducation() {
    this.education.push(this.createEducation());
  }
}
