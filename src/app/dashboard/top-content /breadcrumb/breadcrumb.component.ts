import { Component, OnInit } from '@angular/core';
import { BreadcrumbModel } from '@app/models/breadcrumb.model';
import { Observable } from 'rxjs';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
    breadcrumbs: Observable<BreadcrumbModel[]>;

    constructor(private breadcrumbService: BreadcrumbService) {}

    ngOnInit(): void {
        this.breadcrumbs = this.breadcrumbService.breadcrumbs;
    }
}
