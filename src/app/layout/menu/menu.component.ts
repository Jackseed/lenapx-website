import { Component, OnInit } from '@angular/core';
import { Projet, PROJETS } from 'src/app/models/project-list';



export interface ImageTitre {
  section: string;
  image: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  public imageTitres: ImageTitre[] = [
    {section: 'graphisme', image: 'menu-graphisme.jpg'},
    {section: 'illustration', image: 'menu-illustration.jpg'},
    {section: 'animation', image: 'menu-animation.jpg'}
  ];

  public projets: Projet[] = PROJETS;


  constructor() {
  }

  ngOnInit() {
  }

}
