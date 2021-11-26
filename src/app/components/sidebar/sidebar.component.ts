import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  constructor() { }
  faBars = faBars;
  faTimes = faTimes;
  ngOnInit() {
  }
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
}
