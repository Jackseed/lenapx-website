import { Component, OnInit } from '@angular/core';
import { VIGNETTES } from 'src/app/models/vignettes';
import { ObservableMedia } from '@angular/flex-layout';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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

  public cols: Observable<number>;
  public vignettes: Vignette[] = VIGNETTES;

  constructor(
    public media: ObservableMedia,
  ) { }

  ngOnInit() {
    const grid = new Map([
      ['xs', 2],
      ['sm', 3],
      ['md', 4],
      ['lg', 4],
      ['xl', 4]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.media.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.media.asObservable().pipe(
      map(change => {
        console.log(change);
        console.log(grid.get(change.mqAlias));
        return grid.get(change.mqAlias);
      }),
      startWith(start)
      );
  }
}
