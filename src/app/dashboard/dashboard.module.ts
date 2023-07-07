import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthGuard } from '@app/core/auth.guard';

@NgModule({
    declarations: [
        TableComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    providers: [
        AuthGuard
    ],
})
export class DashboardModule {}
