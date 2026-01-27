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
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  wrong:boolean=false;
  private auth = inject(AuthService);
  private route = inject(Router);
  loginForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required,Validators.maxLength(18),Validators.minLength(8)]],
  });
  onSubmit() {
    if (this.loginForm.invalid) return;
    let useName = this.loginForm.get('userName')!.value as string;
    let passWord = this.loginForm.get('password')!.value as string;
    let ok = this.auth.login(useName, passWord);
    if (ok) {
      this.route.navigate(['/dashboard']);
    }
    else{
      this.wrong=true;
    }
  }
  get userName() {
    return this.loginForm.get('userName');
  }
  get passWord() {
    return this.loginForm.get('password');
  }
}
