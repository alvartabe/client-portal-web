import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardGuard } from './dashboard.guard';
import { UserService } from './user.service';


@NgModule({
  declarations: [
      TableComponent,
      DashboardComponent,
  ],
  imports: [
      CommonModule,
      DashboardRoutingModule,
  ],
  providers: [
      DashboardGuard,
      UserService
  ]
})
export class DashboardModule { }
