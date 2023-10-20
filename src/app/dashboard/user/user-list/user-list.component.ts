import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { UserService } from '../user.service';
import { UserModel } from '@app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TableParamsModel } from '@app/models/table-params.model';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'email', 'enabled'];
    dataSource: MatTableDataSource<UserModel>;
    isLoading = true;
    tableParams = {} as TableParamsModel;

    pageSize = 5;
    pageIndex = 0;
    sortActive = 'username';
    sortDirection = 'asc';

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.userService.getUsers().subscribe((results: UserModel[]) => {
            this.dataSource = new MatTableDataSource(results);
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


