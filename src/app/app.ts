import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Connexion} from './features/connexion/connexion';
import {Navbar} from './shared/navbar/navbar';
import {Accueil} from './shared/accueil/accueil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Connexion, Navbar, Accueil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sangoku');
}
