import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({

  exports: [
    FlexLayoutModule,
    MatGridListModule
  ]
})
export class UiModule { }
