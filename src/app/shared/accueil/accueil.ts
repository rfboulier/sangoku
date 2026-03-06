import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Auth} from '../../services/auth';
import {CharacterService} from '../../services/characterService';
import {Character} from '../../models/character';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})

export class Accueil implements OnInit {
  // Concerne l'utilisateur
  public username: string = '';

  // Concerne la récupération des persos
  public characters: Character[] = [];
  public isLoading = true;
  public errorMessage: string = '';
  private routerSub: Subscription = new Subscription();


  constructor(public auth: Auth, private characterService: CharacterService,     private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loadCharacters();
    this.username = this.auth.getUsername();
  }

  private loadData(): void {
    this.username = this.auth.getUsername();
    this.loadCharacters();
  }

  private loadCharacters(): void {
    this.isLoading = true;
    this.characterService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des personnages';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  public isLogged(): boolean {
    return this.auth.getUsername().trim().length > 0;
  }
}
