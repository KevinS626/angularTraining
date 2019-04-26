import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  currentProject: Project;
  origionalTitle;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    if(value) this.origionalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  };

  constructor() { }

  ngOnInit() {
  }

}
