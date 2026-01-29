import { Component, inject, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CsInputComponent } from '../cs-input/cs-input.component';
import { FormStateService } from '../services/form-state.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CsInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  formstate = inject(FormStateService);
  wrong: boolean = false;
  private auth = inject(AuthService);
  private route = inject(Router);
  loginForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: [
      '',
      [Validators.required, Validators.maxLength(18), Validators.minLength(8)],
    ],
  });
  ngOnInit() {
    //!Form Data Save
    const saved = this.formstate.getForm('Login');
    if (saved) {
      this.loginForm.patchValue(saved);
    }
    this.loginForm.valueChanges.subscribe((value) => {
      this.formstate.saveForm('Login', value);
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) return;
    let useName = this.loginForm.get('userName')!.value as string;
    let password = this.loginForm.get('password')!.value as string;
    let ok = this.auth.login(useName, password);
    if (ok) {
      this.route.navigate(['/userform']);
    } else {
      this.wrong = true;
    }
    this.formstate.clearForm('Login')
  }
  get userName() {
    return this.loginForm.get('userName');
  }
  get passWord() {
    return this.loginForm.get('password');
  }
}
