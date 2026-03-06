import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Auth} from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(public router: Router, private authService: Auth) {
  }

  public isLogged(): boolean {
    return this.authService.getUsername().trim().length > 0;
  }

  logout() {
    this.authService.logout()
  }

}
