import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectPageComponent } from './website/project-page/project-page.component';
import { GridComponent } from './website/grid/grid.component';

const routes: Routes = [
  { path: 'home', component: GridComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: ':title', component: ProjectPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
