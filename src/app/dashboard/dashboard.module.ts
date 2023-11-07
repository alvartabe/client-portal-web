import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthGuard } from '@app/core/app-auth.guard';
import { UserModule } from './user/user.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from '@app/shared/shared.module';
import { AccountMenuComponent } from './top-content /account-menu/account-menu.component';
import { BreadcrumbComponent } from './top-content /breadcrumb/breadcrumb.component';
import { SearchComponent } from './top-content /search/search.component';
import { DropboxModule } from './dropbox/dropbox.module';

@NgModule({
    declarations: [
        DashboardComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SearchComponent,
        AccountMenuComponent
    ],
    imports: [
        SharedModule,
        DashboardRoutingModule,
        // feature modules
        UserModule,
        DropboxModule
    ],
    providers: [
        AuthGuard
    ],
})
export class DashboardModule {}
