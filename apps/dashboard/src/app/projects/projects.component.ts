import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { resultMemoize } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects$;
  selectedProject: Project[];

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  // getProjects() {
  //   this.projectService.all()
  //     .subscribe((result: any) =>this.projects = result);
  // }
  getProjects() {
    this.projects$ = this.projectService.all();
  }

  deleteProject(project) {
    this.projectService.delete(project)
      .subscribe(result => this.getProjects())
  }

  cancel() {
    this.selectProject(null);
  }
}
