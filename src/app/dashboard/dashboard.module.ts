import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LucideAngularModule, Home, Menu, UserCheck, ChevronDown, Box } from 'lucide-angular';
import { DashboardGuard } from './dashboard.guard';



@NgModule({
  declarations: [
      TableComponent,
      DashboardComponent,
  ],
  imports: [
      CommonModule,
      DashboardRoutingModule,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      LucideAngularModule.pick({Home, Menu, UserCheck, ChevronDown, Box})
  ],
  providers: [
      DashboardGuard
  ]
})
export class DashboardModule { }
