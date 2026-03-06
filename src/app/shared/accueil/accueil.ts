import {Component, OnInit} from '@angular/core';
import {Auth} from '../../services/auth';
import {CharacterService} from '../../services/characterService';
import {Character} from '../../models/character';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})

export class Accueil {
  // Concerne l'utilisateur
  public username: string = '';

  // Concerne la récupération des persos
  public characters: Character[] = [];
  public isLoading = true;
  public errorMessage: string = '';

  constructor(private auth: Auth, private characterService: CharacterService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit appelé');
    this.username = this.auth.getUsername();
    this.loadCharacters();
  }

  public isLogged(): boolean {
    return this.auth.getUsername().trim().length > 0;
  }

  private loadCharacters(): void {
    this.characterService.getAllCharacters().subscribe({
      next: (data) => {
        console.log('Données reçues :', data);
        this.characters = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur API :', err);
        this.errorMessage = 'Erreur lors du chargement des personnages';
        this.isLoading = false;
      },
      complete: () => {
        console.log('Requête terminée');
      }
    })
  }

}
