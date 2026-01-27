import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  route = inject(Router);
  SignUpform = this.fb.group({
    email: [
      '',
      [Validators.pattern(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/)],
    ],
    username: [''],
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
    confirmPassword: [''],
  });
  onSubmit() {
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
}
String;
