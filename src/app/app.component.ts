import { Component } from '@angular/core';
import { PROJETS, Projet } from './models/project-list';
import { ImageTitre, TITRES_MENU } from './models/titres-menu';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public projets: Projet[] = PROJETS;
  public imageTitres: ImageTitre[] = TITRES_MENU;

  constructor(public media: ObservableMedia) {}
}
