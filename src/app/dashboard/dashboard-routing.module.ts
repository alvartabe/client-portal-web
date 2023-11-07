import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '@app/core/app-auth.guard';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'user',
                loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
                data: {
                    breadcrumb: 'Users'
                },
            },
            {
                path: 'dropbox',
                loadChildren: () => import('./dropbox/dropbox.module').then((m) => m.DropboxModule),
                data: {
                    breadcrumb: 'Dropbox'
                },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
