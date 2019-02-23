import { Component, OnInit } from '@angular/core';
import { VIGNETTES } from 'src/app/models/vignettes';

export interface Vignette {
  image: string;
  alt: string;
  lien: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public vignettes: Vignette[] = VIGNETTES;

  constructor() { }

  ngOnInit() {
  }

}
