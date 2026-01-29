import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces';
import { LocalstorageService } from '../services/localstorage.service';
import { CsInputComponent } from '../cs-input/cs-input.component';
import { passwordMatchValidator } from '../Validator/passwordMatchValidator';
import { FormStateService } from '../services/form-state.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CsInputComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  route = inject(Router);
  localStorage = inject(LocalstorageService);
  passwordMatch = false;
  formstate = inject(FormStateService);
  SignUpform = this.fb.group(
    {
      email: [
        '',
        [
          Validators.pattern(
            /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
          ),
          Validators.required,
        ],
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^\S+$/), // no spaces
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(18),
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          ),
        ],
      ],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: passwordMatchValidator,
    },
  );
  ngOnInit() {
    //!Form Data Save
    const saved = this.formstate.getForm('Sign');
    if (saved) {
      this.SignUpform.patchValue(saved);
    }
    this.SignUpform.valueChanges.subscribe((value) => {
      this.formstate.saveForm('Sign', value);
    });
  }
  onSubmit() {
    this.formstate.clearForm('Sign');
    if (this.SignUpform.invalid) return;
    let email = this.SignUpform.get('email')?.value as string;
    let userName = this.SignUpform.get('username')?.value as string;
    let password = this.SignUpform.get('password')?.value as string;
    let confirmPassword = this.SignUpform.get('confirmPassword')?.value;
    let user: User = {
      userName,
      password,
      email,
    };
    let ok = this.auth.addUser(user);
    if (ok) {
      this.route.navigate(['/login']);
    }
  }
  get email() {
    return this.SignUpform.get('email');
  }
  get password() {
    return this.SignUpform.get('password');
  }
  get confirmPassword() {
    return this.SignUpform.get('confirmPassword');
  }
}
