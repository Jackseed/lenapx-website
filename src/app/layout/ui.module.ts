import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({

  exports: [
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule
  ]
})
export class UiModule { }
