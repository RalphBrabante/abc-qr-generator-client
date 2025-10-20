import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from '../../app.config';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private http: HttpClient) {}

  // ✅ Check if token exists in localStorage
  isLoggedIn(): boolean {

    console.log('checking if logged in')

    const token = localStorage.getItem(this.TOKEN_KEY);
    return !!token;
  }

  // ✅ Get the token (optional)
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Login User
  loginUser(emailAddress: string, password: string): Observable<AuthResponse> {

    console.log('login user')
    return this.http.post<AuthResponse>(baseURL + '/auth/authenticate', {
      emailAddress,
      password,
    });
  }

  // ✅ Save token (e.g., after login)
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // ✅ Remove token (e.g., on logout)
  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
