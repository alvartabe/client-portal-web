import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthGuard } from '@app/core/auth.guard';
import { UserModule } from './user/user.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    declarations: [
        DashboardComponent,
        NavigationComponent
    ],
    imports: [
        SharedModule,
        DashboardRoutingModule,
        // feature modules
        UserModule
    ],
    providers: [
        AuthGuard
    ],
})
export class DashboardModule {}
