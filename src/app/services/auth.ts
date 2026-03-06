import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Auth {

  public saveUsername(username: string) {
    localStorage.setItem('username', username);
  }

  public getUsername(): string {
    return localStorage.getItem('username') ?? '';
  }

  public isLogged(): boolean {
    return this.getUsername().trim().length > 0;
  }

  public logout(): void {
    localStorage.removeItem('username');
  }
}
