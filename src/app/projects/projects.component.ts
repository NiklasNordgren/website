import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  panelOpenStateExamCenter: boolean = false;
  panelOpenStateThesisWork: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
