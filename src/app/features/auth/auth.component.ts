import { Component, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { BaseComponent } from '../../core/common/base-component.directive';
import { takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent extends BaseComponent implements OnInit {
  loginForm!: FormGroup;
  isLoggingIn = signal<boolean>(false);
  errorMessage = signal<string>('');

  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get emailAddress() {
    return this.loginForm.get('emailAddress') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  get errorMessageAlert() {
    return this.errorMessage.asReadonly()();
  }
  onSubmit(): void {
    this.authSvc
      .loginUser(this.emailAddress.value, this.password.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (resp) => {
          localStorage.setItem('auth_token', resp.data.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.errorMessage.set(err.error.message);
        },
      });
    // if (this.loginForm.valid) {
    //   console.log('Form submitted:', this.loginForm.value);
    // } else {
    //   console.log('Form is invalid');
    // }
  }
}
