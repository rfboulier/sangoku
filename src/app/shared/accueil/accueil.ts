import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../services/auth';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {
  public username: string = '';

  constructor(private router: Router, private auth: Auth) {
    this.username = this.auth.getUsername();
  }

  public isLogged(): boolean {
    return this.auth.getUsername().trim().length > 0;
  }

}
