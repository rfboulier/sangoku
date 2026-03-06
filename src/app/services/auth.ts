import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class Auth {
  private username: string | null = '';

  constructor(private router: Router) {
    this.loadUsername();
  }

  public saveUsername(username: string) {
    this.username = username;
    localStorage.setItem('username', username);
    console.log(this.username);
    this.router.navigate(['/']);
  }

  public loadUsername() {
    this.username = localStorage.getItem('username')
  }

  public getUsername(): string {
    return localStorage.getItem('username') ?? '';
  }

  public isLogged() {
    return this.getUsername().trim().length > 0;
  }

  public logout(): void {
    this.username = '';
    localStorage.removeItem("username");
  }
}
