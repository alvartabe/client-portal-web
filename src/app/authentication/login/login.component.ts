import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    model: LoginModel = {username: '', password: ''}

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    ngOnInit(): void {
        // console.log(this.config.appApi.url);
    }

    onSubmit(): void {
        console.log("submit");
        this.authenticationService.login(this.model).subscribe((response) => {
            console.log(response);
            this.router.navigate(['/dashboard']);
        })
    }
}
