import { Component, OnDestroy } from '@angular/core';
import { VIGNETTES } from 'src/app/models/vignettes';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

export interface Vignette {
  image: string;
  alt: string;
  lien: string;
}

export interface Tile {
  cols: number;
  gutterSize: number;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnDestroy {

  public vignettes: Vignette[] = VIGNETTES;
  public tile: Tile;

  watcher: Subscription;
  activeMediaQuery = '';

  constructor(mediaObserver: MediaObserver) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if ( change.mqAlias === 'xs') {
        this.tile = {cols: 2, gutterSize: 0};
      } else if ( change.mqAlias === 'sm') {
        this.tile = {cols: 4, gutterSize: 0};
      } else {
        this.tile = {cols: 4, gutterSize: 20};
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
