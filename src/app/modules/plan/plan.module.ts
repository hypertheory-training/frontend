import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'plan',
    component: PlanComponent
  }
]

@NgModule({
  declarations: [
    PlanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PlanComponent
  ]
})
export class PlanModule { }
