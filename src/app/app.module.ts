import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './layout/menu/menu.component';
import { UiModule } from './layout/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { WebsiteModule } from './website/website.module';
import { GridComponent } from './website/grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiModule,
    AppRoutingModule,
    WebsiteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
