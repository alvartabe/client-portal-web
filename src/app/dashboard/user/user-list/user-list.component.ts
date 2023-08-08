import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';
import { UserModel } from '@app/models/user.model';

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

    constructor(private userService: UserService) {}

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

    sortByColumn(sort: Sort): void { }
}


