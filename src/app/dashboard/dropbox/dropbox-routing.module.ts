import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropboxListComponent } from './dropbox-list/dropbox-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: DropboxListComponent,
        data: {
            breadcrumb: 'All files'
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DropboxRoutingModule {}
