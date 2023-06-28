import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private authenticationService: AuthenticationService) {}

    ngOnInit(): void {
        this.authenticationService.getUser(1).subscribe((response) => {
            console.log(response);
        });
    }
}
