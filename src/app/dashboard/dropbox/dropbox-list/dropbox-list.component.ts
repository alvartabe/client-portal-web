import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { ActivatedRoute, Router } from '@angular/router';
import { TableParamsModel } from '@app/models/table-params.model';
import { DropboxService } from '../dropbox.service';
import { DropboxModel } from '@app/models/dropbox.model';
import { DropboxFilesModel } from '@app/models/dropbox-files.model';

@Component({
    selector: 'app-dropbox-list',
    templateUrl: './dropbox-list.component.html',
    styleUrls: ['./dropbox-list.component.scss'],
})
export class DropboxListComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['id', 'name', 'clientModified', 'serverModified', 'pathLower'];
    dataSource: MatTableDataSource<DropboxFilesModel>;
    isLoading = true;
    tableParams = {} as TableParamsModel;

    pageSize = 5;
    pageIndex = 0;
    sortActive = 'name';
    sortDirection = 'asc';

    constructor(private dropboxService: DropboxService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {

        this.isLoading = true;
        this.dropboxService.getFolderContents('/patrones/material del curso/libros').subscribe((results: DropboxModel) => {
           console.log(results);
           this.dataSource = new MatTableDataSource(results.entries);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
           this.isLoading = false;
        });
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    sortByColumn(sort: Sort): void {
        this.tableParams.sortActive = sort.active ? sort.active : null;
        this.tableParams.sortDirection = sort.direction ? sort.direction : null;
        this.refreshPage();
    }

    private refreshPage(): void {
        this.router.navigate([], {
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
            queryParams: this.tableParams,
        });
    }
}


