import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../services/auth';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  imports: [
    FormsModule
  ],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css',
})

export class Connexion {
public username: string ='';
public password: string ='';

constructor(private router: Router, private authService: Auth) {
}

public saveUsername() {
  this.authService.saveUsername(this.username)
  console.log(this.username);
}

  public isLoggedIn(): boolean {
    return this.authService.getUsername().trim().length > 0;
  }

public logout(): void {
  this.authService.logout();
  this.username = '';
  this.password = '';
}

}
