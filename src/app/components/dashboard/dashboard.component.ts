import { Component, OnInit } from '@angular/core';
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faChartBar = faChartBar;
  constructor() { }

  ngOnInit(): void {
  }

}
