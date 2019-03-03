import { Component } from '@angular/core';
import { PROJETS, Projet } from './models/project-list';
import { ImageTitre, TITRES_MENU } from './models/titres-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public projets: Projet[] = PROJETS;
  public imageTitres: ImageTitre[] = TITRES_MENU;
}
