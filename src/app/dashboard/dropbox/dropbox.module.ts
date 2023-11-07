import { NgModule } from '@angular/core';
import { DropboxListComponent } from './dropbox-list/dropbox-list.component';
import { DropboxRoutingModule } from './dropbox-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { DropboxService } from './dropbox.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        DropboxListComponent
    ],
    imports: [
        SharedModule,
        DropboxRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatMenuModule,
        MatButtonModule
    ],
    providers:[
        DropboxService
    ]
})
export class DropboxModule {}
