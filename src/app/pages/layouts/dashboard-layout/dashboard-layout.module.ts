import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardLayoutRoutes } from './dashboard-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRoutes)
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardLayoutModule { }
