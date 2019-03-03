import { Component, OnInit } from '@angular/core';
import { Projet, PROJETS } from 'src/app/models/project-list';
import { ImageTitre, TITRES_MENU } from 'src/app/models/titres-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  public imageTitres: ImageTitre[] = TITRES_MENU;
  public projets: Projet[] = PROJETS;


  constructor() {
  }

  ngOnInit() {
  }

}
