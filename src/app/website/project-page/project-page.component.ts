import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projet, PROJETS } from 'src/app/models/project-list';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  public project$: Observable<Projet>;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.project$ = this.route.params.pipe(
      map(p => p.title),
      map(title => PROJETS.find(projet => {
        return projet.lien === title;
      })));
  }
}
