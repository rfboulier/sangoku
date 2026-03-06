import { Routes } from '@angular/router';
import {Accueil} from './shared/accueil/accueil';
import {Connexion} from './features/connexion/connexion';

export const routes: Routes = [
  {path: '', component: Accueil},
  {path: 'connexion', component: Connexion},
];
