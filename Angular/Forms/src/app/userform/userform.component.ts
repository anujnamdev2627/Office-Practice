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
import { CsInputComponent } from '../cs-input/cs-input.component';
import { FormStateService } from '../services/form-state.service';

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CsInputComponent],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css',
})
export class UserformComponent {
  fb = inject(FormBuilder);
  formstate = inject(FormStateService);
  stateService = inject(StateService);
  maxEmail: boolean = false;
  maxAdd: boolean = false;

  states$ = this.stateService.getState();
  cities$!: Observable<any[]>;
  userForm = this.fb.group({
    userName: ['', [Validators.required, Validators.maxLength(20)]],
    surName: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)],
    ],
    email: ['', [Validators.required, Validators.email]],
    additionalEmail: this.fb.array([]),
    address: this.fb.group({
      houseNo: ['', [Validators.required]],
      street1: ['', [Validators.required]],
      addAddress: this.fb.array([]),
      city: [{ value: '', disabled: true }, [Validators.required]],
      state: ['', [Validators.required]],
    }),
    education: this.fb.group({
      degree: ['',[Validators.required]],
      organization: ['',[Validators.required]],
      grade: ['',[Validators.required]],
      addEducation: this.fb.array([]),
    }),
  });
  ngOnInit() {
    //!Form Data Save
    const saved = this.formstate.getForm('User');
    if (saved) {
      this.userForm.patchValue(saved);
    }
    this.userForm.valueChanges.subscribe((value) => {
      this.formstate.saveForm('User', value);
    });
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
    });
  }
  //! Email
  get additionalEmail() {
    return this.userForm.get('additionalEmail') as FormArray;
  }
  addEmail() {
    this.additionalEmail.push(new FormControl('', [Validators.email]));
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
    if (this.education.length < 2) {
      this.education.push(this.createEducation());
    }
  }

  //!Validity Check
  get userInfoValid(): boolean {
    return (
      (this.userForm.get('userName')?.valid ?? false) &&
      (this.userForm.get('surName')?.valid ?? false) &&
      (this.userForm.get('email')?.valid ?? false)
    );
  }
  get addressGroup(): FormGroup {
    return this.userForm.get('address') as FormGroup;
  }
  get educationGroup(): FormGroup {
    return this.userForm.get('education') as FormGroup;
  }
  get addressValid(): boolean {
    return this.addressGroup.valid;
  }
}
