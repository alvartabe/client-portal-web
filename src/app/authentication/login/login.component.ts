import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { LoginModel } from '@app/models/login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    model: LoginModel = {username: '', password: ''};

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    ngOnInit(): void {
        // console.log(this.config.appApi.url);
    }

    onSubmit(): void {
        this.authenticationService.login(this.model).subscribe((response) => {
            this.router.navigate(['/dashboard']);
        });
    }
}
