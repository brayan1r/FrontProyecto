import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class AuthService {
  private readonly KEY = 'auth_token_demo';

  // Simulación de login
  loginMock(email: string, password: string): boolean {
    const isValid = email === 'admin@demo.com' && password === '123456';

    if (isValid) {
      localStorage.setItem(this.KEY, 'demo_token');
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.KEY);
  }
}
