import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../layout/ui.module';
import { AppRoutingModule } from '../app-routing.module';
import { ProjectPageComponent } from './project-page/project-page.component';

@NgModule({
  declarations: [
  ProjectPageComponent],
  imports: [
    CommonModule,
    UiModule,
    AppRoutingModule
  ]
})
export class WebsiteModule { }
