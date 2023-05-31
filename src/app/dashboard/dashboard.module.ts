import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LucideAngularModule, Home, Menu, UserCheck, ChevronDown, Box } from 'lucide-angular';



@NgModule({
  declarations: [
    TableComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LucideAngularModule.pick({Home, Menu, UserCheck, ChevronDown, Box})
  ]
})
export class DashboardModule { }
