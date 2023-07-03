import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/authentication.service';
import { LoginModel } from '@app/models/login.model';
import { SharedModule } from '@app/shared/shared.module';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [SharedModule]
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
